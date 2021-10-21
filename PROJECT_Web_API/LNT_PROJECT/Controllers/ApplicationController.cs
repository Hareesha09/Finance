using LNT_PROJECT.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LNT_PROJECT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly AppDBContext _context;

        public ApplicationController(AppDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("UserLogin")]
        public async Task<ActionResult<PersonalDetails>> Post(PersonalDetails _personalDetails)
        {
            if (_personalDetails != null && _personalDetails.MailID != null && _personalDetails.Password != null)
            {
                PersonalDetails personalDetails = await GetAccount(_personalDetails.MailID, _personalDetails.Password);

                if (personalDetails != null)
                {
                    return personalDetails;
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }

        [Route("AdminLogin")]
        public async Task<ActionResult<Admin>> Post(Admin _admin)
        {
            if (_admin != null && _admin.MailID != null && _admin.Password != null)
            {
                Admin admin = await GetAccount1(_admin.MailID, _admin.Password);

                if (admin != null)
                {
                    return admin;
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }

        private async Task<Admin> GetAccount1(string mailID, string password)
        {
            return await _context.Admin.FirstOrDefaultAsync(u => u.MailID == mailID && u.Password == password);
        }

        private async Task<PersonalDetails> GetAccount(string MailID, string password)
        {
            return await _context.PersonalDetails.FirstOrDefaultAsync(u => u.MailID == MailID && u.Password == password);
        }
    }
}
