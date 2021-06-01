using System.Data;
using keeprserver.Models;
using Dapper;
using System.Collections.Generic;
using System;
using System.Linq;

namespace keeprserver.Repositories
{
    public class AccountRepository
    {
        private readonly IDbConnection _db;

        public AccountRepository(IDbConnection db)
        {
            _db = db;
        }

        internal Account GetByEmail(string userEmail)
        {
            string sql = "SELECT * FROM accounts WHERE email = @userEmail";
            return _db.QueryFirstOrDefault<Account>(sql, new { userEmail });
        }

        internal Account GetById(string id)
        {
            string sql = "SELECT * FROM accounts WHERE id = @id";
            return _db.QueryFirstOrDefault<Account>(sql, new { id });
        }

        internal Account Create(Account newAccount)
        {
            string sql = @"
            INSERT INTO accounts
              (name, picture, email, id)
            VALUES
              (@Name, @Picture, @Email, @Id)";
            _db.Execute(sql, newAccount);
            return newAccount;
        }

        internal Account Edit(Account update)
        {
            string sql = @"
            UPDATE accounts
            SET 
              name = @Name,
              picture = @Picture
            WHERE id = @Id;";
            _db.Execute(sql, update);
            return update;
        }

        internal List<Keep> GetKeepsByProfile(string id)
        {
            string sql = @"
            SELECT 
                k.*,
                a.*
            FROM keeps k
            JOIN accounts a ON a.id = k.creatorId
            WHERE k.creatorId = @id;
            ";
            return _db.Query<Keep, Profile, Keep>(sql, (k, p) =>
            {
                k.Creator = p;
                return k;
            }, new { id }).ToList();
        }

        internal List<Vault> GetVaultsByProfile(string id)
        {
            string sql = @"
            SELECT 
                v.*,
                a.*
            FROM vaults v
            JOIN accounts a ON a.id = v.creatorId
            WHERE v.creatorId = @id;
            ";
            return _db.Query<Vault, Profile, Vault>(sql, (v, p) =>
            {
                v.Creator = p;
                return v;
            }, new { id }).ToList();
        }
    }
}