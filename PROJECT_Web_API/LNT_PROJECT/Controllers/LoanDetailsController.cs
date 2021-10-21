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
    public class LoanDetailsController : ControllerBase
    {
        private readonly AppDBContext _context;

        public LoanDetailsController(AppDBContext context)
        {
            _context = context;
        }

        // GET: api/LoanDetails
        [HttpGet]
        [Route("List")]
        public async Task<ActionResult<IEnumerable<LoanDetails>>> GetLoanDetails()
        {
            return await _context.LoanDetails.ToListAsync();
        }


        [HttpGet]
        [Route("Details")]
        public async Task<ActionResult<LoanDetails>> Get(int id)
        {
            var data = await _context.LoanDetails.FindAsync(id);
            return data;
        }

        // GET: api/LoanDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LoanDetails>> GetLoanDetails(string id)
        {
            var loanDetails = await _context.LoanDetails.FindAsync(id);

            if (loanDetails == null)
            {
                return NotFound();
            }

            return loanDetails;
        }

        // PUT: api/LoanDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoanDetails(int id, LoanDetails loanDetails)
        {
            if (id != loanDetails.LoanId)
            {
                return BadRequest();
            }

            _context.Entry(loanDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoanDetailsExists(id))
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

        // POST: api/LoanDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LoanDetails>> PostLoanDetails(LoanDetails loanDetails)
        {
            _context.LoanDetails.Add(loanDetails);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LoanDetailsExists(loanDetails.LoanId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetLoanDetails", new { id = loanDetails.LoanId }, loanDetails);
        }

        // DELETE: api/LoanDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLoanDetails(string id)
        {
            var loanDetails = await _context.LoanDetails.FindAsync(id);
            if (loanDetails == null)
            {
                return NotFound();
            }

            _context.LoanDetails.Remove(loanDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LoanDetailsExists(int id)
        {
            return _context.LoanDetails.Any(e => e.LoanId == id);
        }
    }
}
