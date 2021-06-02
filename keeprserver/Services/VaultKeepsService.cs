using System;
using keeprserver.Models;
using keeprserver.Repositories;

namespace keeprserver.Services
{
    public class VaultKeepsService
    {
        private readonly VaultKeepsRepository _repo;

        public VaultKeepsService(VaultKeepsRepository repo)
        {
            _repo = repo;
        }

        internal VaultKeep Create(VaultKeep vaultKeep)
        {
            return _repo.Create(vaultKeep);
        }

        internal bool Delete(int id, Account user)
        {
            VaultKeepRes vaultKeep = _repo.GetOne(id);
            if (vaultKeep.CreatorId != user.Id)
            {
                throw new Exception("Invalid Id or You are not the creator");
            }
            return _repo.Delete(id);
        }

        internal VaultKeepRes GetOne(int id)
        {
            VaultKeepRes vaultKeep = _repo.GetOne(id);
            if (vaultKeep == null)
            {
                throw new Exception("Invalid Id");
            }
            return vaultKeep;
        }

        internal VaultKeep GetVaultKeepByKeepAndVaultId(int vaultId, int keepId)
        {
            return _repo.GetVaultKeepByKeepAndVaultId(vaultId, keepId);
        }
    }
}