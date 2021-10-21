using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LNT_PROJECT.Models;

namespace LNT_PROJECT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalDetailsController : ControllerBase
    {
        private readonly AppDBContext _context;

        public PersonalDetailsController(AppDBContext context)
        {
            _context = context;
        }

        // GET: api/PersonalDetails
        [HttpGet]
        [Route("List")]
        public async Task<ActionResult<IEnumerable<PersonalDetails>>> GetPersonalDetails()
        {
            return await _context.PersonalDetails.ToListAsync();
        }
        
        [HttpGet]
        [Route("Details")]
        public async Task<ActionResult<PersonalDetails>> Get(int id)
        {
            var data = await _context.PersonalDetails.FindAsync(id);
            return data;
        }

        // GET: api/PersonalDetails/5
        [HttpGet]
       
        public async Task<ActionResult<PersonalDetails>> GetPersonalDetails(string id)
        {
            var personalDetails = await _context.PersonalDetails.FindAsync(id);

            if (personalDetails == null)
            {
                return NotFound();
            }

            return personalDetails;
        }

        // PUT: api/PersonalDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("UpdatePersonal")]
        public async Task<IActionResult> PutIncomeDetails(int id, PersonalDetails personalDetails)
        {
            if (id != personalDetails.UserId)
            {
                return BadRequest();
            }

            _context.Entry(personalDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonalDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // POST: api/PersonalDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PersonalDetails>> PostPersonalDetails(PersonalDetails personalDetails)
        {
            _context.PersonalDetails.Add(personalDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccount", new { id = personalDetails.UserId }, personalDetails);

        }

        // DELETE: api/PersonalDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersonalDetails(string id)
        {
            var personalDetails = await _context.PersonalDetails.FindAsync(id);
            if (personalDetails == null)
            {
                return NotFound();
            }

            _context.PersonalDetails.Remove(personalDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonalDetailsExists(int id)
        {
            return _context.PersonalDetails.Any(e => e.UserId == id);
        }
    }
}
