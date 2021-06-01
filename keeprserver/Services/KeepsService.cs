using System;
using System.Collections.Generic;
using keeprserver.Models;
using keeprserver.Repositories;

namespace keeprserver.Services
{
    public class KeepsService
    {
        private readonly KeepsRepository _repo;

        public KeepsService(KeepsRepository repo)
        {
            _repo = repo;
        }

        internal Keep Create(Keep newKeep)
        {
            return _repo.Create(newKeep);
        }

        internal Keep Edit(int id, Keep newKeep)
        {
            Keep keep = _repo.GetOne(id);
            if (keep == null)
            {
                throw new Exception("Invalid Id");
            }
            if (keep.CreatorId != newKeep.CreatorId)
            {
                throw new Exception("You are not the creator of this keep");
            }
            return _repo.Edit(id, newKeep);
        }

        internal List<Keep> GetAll()
        {
            return _repo.GetAll();
        }

        internal Keep GetOne(int id)
        {
            Keep keep = _repo.GetOne(id);
            if (keep == null)
            {
                throw new Exception("Invalid Id");
            }
            return keep;
        }

        internal bool Delete(int id, Account user)
        {
            Keep keep = _repo.GetOne(id);
            if (keep.CreatorId != user.Id)
            {
                throw new Exception("Invalid Id or You are not the creator");
            }
            return _repo.Delete(id);
        }
    }
}