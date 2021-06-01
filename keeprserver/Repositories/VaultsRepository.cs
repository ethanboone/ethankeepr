using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keeprserver.Models;

namespace keeprserver.Repositories
{
    public class VaultsRepository
    {
        private readonly IDbConnection _db;

        public VaultsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal Vault Create(Vault newVault)
        {
            // reference thursday project, creator object needs to be populated when returned
            string sql = @"
            INSERT INTO 
            vaults (creatorId, name, description, isPrivate)
            VALUES (@CreatorId, @Name, @Description, @IsPrivate);
            SELECT LAST_INSERT_ID();";
            newVault.Id = _db.ExecuteScalar<int>(sql, newVault);
            return newVault;
        }

        internal Vault Edit(Vault newVault)
        {
            string sql = @"
            UPDATE vaults
            SET 
                name = @Name,
                description = @Description,
                isPrivate = @IsPrivate
            WHERE
                id = @Id;";
            _db.Execute(sql, newVault);
            return newVault;
        }

        internal Vault GetOne(int id)
        {
            string sql = @"
            SELECT
                v.*,
                a.*
            FROM vaults v
            JOIN accounts a ON a.id = v.creatorId
            WHERE v.id = @id;";
            return _db.Query<Vault, Account, Vault>(sql, (v, a) =>
                {
                    v.Creator = a;
                    return v;
                },
                new { id }).FirstOrDefault();
        }


        internal bool Delete(int id)
        {
            string sql = @"
            DELETE FROM vaults WHERE id = @id LIMIT 1;";
            int rows = _db.Execute(sql, new { id });
            return rows == 1;
        }

        internal List<Vault> GetAll()
        {
            string sql = @"
            SELECT 
                v.*,
                a.*
            FROM vaults v
            JOIN accounts a ON a.id = v.creatorId
                and
                v.isPrivate == false;";
            List<Vault> vaults = _db.Query<Vault, Account, Vault>(sql, (v, a) =>
            {
                v.Creator = a;
                return v;
            }, splitOn: "id").ToList();
            return vaults;
        }
    }
}