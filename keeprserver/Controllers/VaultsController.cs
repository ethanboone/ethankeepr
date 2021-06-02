using System.Collections.Generic;
using System.Threading.Tasks;
using keeprserver.Services;
using Microsoft.AspNetCore.Mvc;
using keeprserver.Models;
using CodeWorks.Auth0Provider;
using Microsoft.AspNetCore.Authorization;

namespace keeprserver.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VaultsController : ControllerBase
    {
        private readonly VaultsService _service;
        private readonly VaultKeepsService _vkService;
        private readonly KeepsService _keepsService;
        // private readonly VaultKeepsService _vaultKeepsService;

        public VaultsController(VaultsService service, VaultKeepsService vkService, KeepsService keepsService, VaultKeepsService vaultKeepsService)
        {
            _service = service;
            _vkService = vkService;
            _keepsService = keepsService;
            // _vaultKeepsService = vaultKeepsService;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Vault>> Create([FromBody] Vault newKeep)
        {
            try
            {
                Account user = await HttpContext.GetUserInfoAsync<Account>();
                newKeep.CreatorId = user.Id;
                _service.Create(newKeep);
                newKeep.Creator = user;
                return Ok(newKeep);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<Vault>> Edit(int id, [FromBody] Vault newVault)
        {
            try
            {
                Account user = await HttpContext.GetUserInfoAsync<Account>();
                newVault.Id = id;
                newVault.CreatorId = user.Id;
                _service.Edit(id, newVault);
                return Ok(newVault);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<Vault>> Delete(int id)
        {
            try
            {
                Account user = await HttpContext.GetUserInfoAsync<Account>();
                bool deleted = _service.Delete(id, user);
                if (deleted)
                {
                    return Ok("Successfully Deleted");
                }
                else
                {
                    throw new System.Exception("Invalid Id");
                }
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public ActionResult<List<Vault>> GetAll()
        {
            try
            {
                List<Vault> vaults = _service.GetAll();
                return Ok(vaults);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Vault>> GetOne(int id)
        {
            try
            {
                Account user = await HttpContext.GetUserInfoAsync<Account>();
                Vault vault = _service.GetOne(id, user);
                return Ok(vault);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        // [HttpGet("{id}/keeps")]
        // public ActionResult<VaultKeepRes> GetVaultKeep(int id)
        // {
        //     try
        //     {
        //         VaultKeepRes VK = _vkService.GetOne(id);
        //         return Ok(VK);
        //     }
        //     catch (System.Exception e)
        //     {

        //         return BadRequest(e.Message);
        //     }
        // }


        [HttpGet("{id}/keeps")]
        public async Task<ActionResult<List<KeepRes>>> GetKeepsByVault(int id)
        {
            try
            {
                Account user = await HttpContext.GetUserInfoAsync<Account>();
                List<KeepRes> keeps = _keepsService.GetKeepsByVault(id, user);
                return Ok(keeps);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        // [HttpGet("{vaultId}/keeps/{keepId}")]
        // public ActionResult<VaultKeep> GetVaultKeepByKeepAndVaultId(int vaultId, int keepId)
        // {
        //     try
        //     {
        //         VaultKeep vaultKeep = _vaultKeepsService.GetVaultKeepByKeepAndVaultId(vaultId, keepId);
        //         return Ok(vaultKeep);
        //     }
        //     catch (System.Exception)
        //     {

        //         throw;
        //     }
        // }
    }
}