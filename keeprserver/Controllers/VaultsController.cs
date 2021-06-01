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

        public VaultsController(VaultsService service, VaultKeepsService vkService)
        {
            _service = service;
            _vkService = vkService;
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
                return Ok(newKeep);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<Vault>> Edit(int id, [FromBody] Vault newKeep)
        {
            try
            {
                Account user = await HttpContext.GetUserInfoAsync<Account>();
                newKeep.Id = id;
                newKeep.CreatorId = user.Id;
                _service.Edit(id, newKeep);
                return Ok(newKeep);
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
        public ActionResult<Vault> GetOne(int id)
        {
            try
            {
                Vault vault = _service.GetOne(id);
                return Ok(vault);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/keeps")]
        public ActionResult<VaultKeepRes> GetVaultKeep(int id)
        {
            try
            {
                VaultKeepRes VK = _vkService.GetOne(id);
                return Ok(VK);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}