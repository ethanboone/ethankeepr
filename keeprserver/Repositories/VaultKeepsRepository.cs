using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keeprserver.Models;

namespace keeprserver.Repositories
{
    public class VaultKeepsRepository
    {
        private readonly IDbConnection _db;

        public VaultKeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal VaultKeep Create(VaultKeep vaultKeep)
        {
            string sql = @"INSERT INTO 
            vault_keep(vaultId, keepId)
            VALUES (@VaultId, @KeepId);
            SELECT LAST_INSERT_ID();
            ";
            vaultKeep.Id = _db.ExecuteScalar<int>(sql, vaultKeep);
            return vaultKeep;
        }

        internal VaultKeepRes GetOne(int id)
        {
            string sql = @"
                SELECT
                vk.id as vaultKeepId,
                vk.vaultId as vaultId,
                vk.keepId as keepId,
                v.creatorId as creatorId,
                k.name as kName,
                k.description as kDescription,
                v.name as vName,
                v.description as vDescription
                FROM
                vault_keep vk
                JOIN vaults v ON v.id = vk.vaultId
                JOIN keeps k ON k.id = vk.keepId
                WHERE
                vk.id = @id;
            ";
            VaultKeepRes vk = _db.Query<VaultKeepRes>(sql, new { id }).FirstOrDefault();
            return vk;
        }

        internal bool Delete(int id)
        {
            string sql = @"
            DELETE FROM vault_keep WHERE id = @id LIMIT 1;";
            int rows = _db.Execute(sql, new { id });
            return rows == 1;
        }
    }
}