
using System;
using System.Collections.Generic;
using keeprserver.Models;
using keeprserver.Repositories;

namespace keeprserver.Services
{
    public class AccountService
    {
        private readonly AccountRepository _repo;
        public AccountService(AccountRepository repo)
        {
            _repo = repo;
        }



        internal string GetProfileEmailById(string id)
        {
            return _repo.GetById(id).Email;
        }
        internal Account GetProfileByEmail(string email)
        {
            return _repo.GetByEmail(email);
        }
        internal Account GetOrCreateProfile(Account userInfo)
        {
            Account profile = _repo.GetById(userInfo.Id);
            if (profile == null)
            {
                return _repo.Create(userInfo);
            }
            return profile;
        }

        internal Profile GetProfileById(string id)
        {
            return _repo.GetById(id);
        }

        internal Account Edit(Account editData, string userEmail)
        {
            Account original = GetProfileByEmail(userEmail);
            original.Name = editData.Name.Length > 0 ? editData.Name : original.Name;
            original.Picture = editData.Picture.Length > 0 ? editData.Picture : original.Picture;
            return _repo.Edit(original);
        }

        internal List<Keep> GetKeepsByProfile(string id)
        {
            List<Keep> keeps = _repo.GetKeepsByProfile(id);
            return keeps;
        }

        internal List<Vault> GetVaultsByProfile(string id)
        {
            List<Vault> vaults = _repo.GetVaultsByProfile(id);
            return vaults;
        }
    }
}