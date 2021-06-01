using System;
using keeprserver.Models;
using keeprserver.Repositories;
using System.Collections.Generic;

namespace keeprserver.Services
{
    public class VaultsService
    {
        private readonly VaultsRepository _repo;

        public VaultsService(VaultsRepository repo)
        {
            _repo = repo;
        }

        internal Vault Create(Vault newVault)
        {
            return _repo.Create(newVault);
        }
        internal Vault Edit(int id, Vault newVault)
        {
            Vault vault = _repo.GetOne(id);
            if (vault == null)
            {
                throw new Exception("Invalid Id");
            }
            if (vault.CreatorId != newVault.CreatorId)
            {
                throw new Exception("You are not the creator of this vault");
            }
            return _repo.Edit(id, newVault);
        }

        internal bool Delete(int id, Account user)
        {
            Vault vault = _repo.GetOne(id);
            if (vault.CreatorId != user.Id)
            {
                throw new Exception("Invalid Id or You are not the creator");
            }
            return _repo.Delete(id);
        }

        internal List<Vault> GetAll()
        {
            return _repo.GetAll();
        }

        internal Vault GetOne(int id)
        {
            Vault vault = _repo.GetOne(id);
            if (vault == null)
            {
                throw new Exception("Invalid Id");
            }
            return vault;
        }

    }
}