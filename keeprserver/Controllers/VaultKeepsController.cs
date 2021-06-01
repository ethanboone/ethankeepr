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
    public class VaultKeepsController : ControllerBase
    {
        private readonly VaultKeepsService _service;

        public VaultKeepsController(VaultKeepsService service)
        {
            _service = service;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<VaultKeep>> Create([FromBody] VaultKeep newVK)
        {
            try
            {
                Account user = await HttpContext.GetUserInfoAsync<Account>();
                newVK.CreatorId = user.Id;
                VaultKeep newVaultKeep = _service.Create(newVK);
                return Ok(newVaultKeep);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<string>> Delete(int id)
        {
            try
            {
                Account user = await HttpContext.GetUserInfoAsync<Account>();
                if (user == null)
                {
                    throw new System.Exception("You must be logged in");
                }
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
    }
}