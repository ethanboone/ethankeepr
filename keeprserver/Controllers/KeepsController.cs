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
    public class KeepsController : ControllerBase
    {
        private readonly KeepsService _service;


        public KeepsController(KeepsService service)
        {
            _service = service;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Keep>> Create([FromBody] Keep newKeep)
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
        public async Task<ActionResult<Keep>> Edit(int id, [FromBody] Keep newKeep)
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
        public async Task<ActionResult<Keep>> Delete(int id)
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
        public ActionResult<List<Keep>> GetAll()
        {
            try
            {
                List<Keep> keeps = _service.GetAll();
                return Ok(keeps);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Keep> GetOne(int id)
        {
            try
            {
                Keep keep = _service.GetOne(id);
                return Ok(keep);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}/edit")]
        public ActionResult<Keep> UserEdit(int id, [FromBody] Keep newKeep)
        {
            try
            {
                Keep updated = _service.UserEdit(id, newKeep);
                return Ok(updated);
            }
            catch (System.Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}