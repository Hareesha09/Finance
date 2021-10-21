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
    public class IncomeDetailsController : ControllerBase
    {
        private readonly AppDBContext _context;

        public IncomeDetailsController(AppDBContext context)
        {
            _context = context;
        }

        // GET: api/IncomeDetails
        [HttpGet]
        [Route("List")]
        public async Task<ActionResult<IEnumerable<IncomeDetails>>> GetIncomeDetails()
        {
            return await _context.IncomeDetails.ToListAsync();
        }

        [HttpGet]
        [Route("Details")]
        public async Task<ActionResult<IncomeDetails>> Get(int id)
        {
            var data = await _context.IncomeDetails.FindAsync(id);
            return data;
        }

        // GET: api/IncomeDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IncomeDetails>> GetIncomeDetails(string id)
        {
            var incomeDetails = await _context.IncomeDetails.FindAsync(id);

            if (incomeDetails == null)
            {
                return NotFound();
            }

            return incomeDetails;
        }

        // PUT: api/IncomeDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIncomeDetails(int id, IncomeDetails incomeDetails)
        {
            if (id != incomeDetails.IncomeDeatilsId)
            {
                return BadRequest();
            }

            _context.Entry(incomeDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IncomeDetailsExists(id))
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

        // POST: api/IncomeDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<IncomeDetails>> PostIncomeDetails(IncomeDetails incomeDetails)
        {
            _context.IncomeDetails.Add(incomeDetails);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (IncomeDetailsExists(incomeDetails.IncomeDeatilsId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetIncomeDetails", new { id = incomeDetails.IncomeDeatilsId }, incomeDetails);
        }

        // DELETE: api/IncomeDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIncomeDetails(string id)
        {
            var incomeDetails = await _context.IncomeDetails.FindAsync(id);
            if (incomeDetails == null)
            {
                return NotFound();
            }

            _context.IncomeDetails.Remove(incomeDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IncomeDetailsExists(int id)
        {
            return _context.IncomeDetails.Any(e => e.IncomeDeatilsId == id);
        }
    }
}
