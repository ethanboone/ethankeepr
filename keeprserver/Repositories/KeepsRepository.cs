using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keeprserver.Models;

namespace keeprserver.Repositories
{
    public class KeepsRepository
    {
        private readonly IDbConnection _db;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal Keep Create(Keep newKeep)
        {
            // reference thursday project, creator object needs to be populated when returned
            string sql = @"
            INSERT INTO 
            keeps (creatorId, name, description, img, views, shares, keeps)
            VALUES (@CreatorId, @Name, @Description, @Img, @Views, @Shares, @Keeps);
            SELECT LAST_INSERT_ID();";
            newKeep.Id = _db.ExecuteScalar<int>(sql, newKeep);
            return newKeep;
        }

        internal Keep Edit(int id, Keep newKeep)
        {
            string sql = @"
            UPDATE keeps
            SET 
                name = @Name,
                description = @Description,
                img = @Img,
                views= @Views,
                shares= @Shares,
                keeps= @Keeps
            WHERE
                id = @id;";
            _db.Execute(sql, newKeep);
            return newKeep;
        }

        internal Keep GetOne(int id)
        {
            string sql = @"
            SELECT
                k.*,
                a.*
            FROM keeps k
            JOIN accounts a ON a.id = k.creatorId
            WHERE k.id = @id;";
            return _db.Query<Keep, Account, Keep>(sql, (k, a) =>
                {
                    k.Creator = a;
                    return k;
                },
                new { id }).FirstOrDefault();
        }


        internal bool Delete(int id)
        {
            string sql = @"
            DELETE FROM keeps WHERE id = @id LIMIT 1;";
            int rows = _db.Execute(sql, new { id });
            return rows == 1;
        }

        internal List<Keep> GetAll()
        {
            string sql = @"
            SELECT 
                k.*,
                a.*
            FROM keeps k
            JOIN accounts a ON a.id = k.creatorId;";
            List<Keep> keeps = _db.Query<Keep, Account, Keep>(sql, (k, a) =>
            {
                k.Creator = a;
                return k;
            }, splitOn: "id").ToList();
            return keeps;
        }

        internal List<KeepRes> GetKeepsByVault(int id)
        {
            string sql = @"
            SELECT
                k.*,
                vk.id as vaultKeepId,
                a.*,
                vk.vaultId as vaultId
            FROM vault_keep vk
            JOIN keeps k ON k.id = vk.keepId
            JOIN accounts a ON k.creatorId = a.id
            WHERE 
                vaultId = @id
                ;
            ";
            return _db.Query<KeepRes, Profile, KeepRes>(sql, (k, a) =>
            {
                k.Creator = a;
                return k;
            }, new { id }).ToList();

        }
    }
}