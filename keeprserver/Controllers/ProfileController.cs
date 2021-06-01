using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using keeprserver.Models;
using keeprserver.Services;
using CodeWorks.Auth0Provider;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keeprserver.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfilesController : ControllerBase
    {

        private readonly AccountService _service;

        public ProfilesController(AccountService service)
        {
            _service = service;
        }


        [HttpGet("{id}")]
        public ActionResult<Profile> GetProfile(string id)
        {
            try
            {
                Profile p = _service.GetProfileById(id);
                return Ok(p);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/keeps")]
        public ActionResult<List<Keep>> GetKeepsByProfile(string id)
        {
            try
            {
                List<Keep> keeps = _service.GetKeepsByProfile(id);
                return Ok(keeps);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/vaults")]
        public ActionResult<List<Vault>> GetVaultsByProfile(string id)
        {
            try
            {
                List<Vault> vaults = _service.GetVaultsByProfile(id);
                return Ok(vaults);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }


    }
}