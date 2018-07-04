using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmpregoCertoAPI.Models;
//using Microsoft.AspNetCore.Cors;
using System.Web.Http.Cors;

namespace EmpregoCertoAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Vagas")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class VagasController : Controller
    {
        private readonly EmpregoCertoDBContext _context;

        public VagasController(EmpregoCertoDBContext context)
        {
            _context = context;
        }

        // GET: api/Vagas
        [HttpGet]
        public IEnumerable<Vaga> GetVaga()
        {
            try
            {
                return _context.Vaga;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        // GET: api/Vagas/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVaga([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var vaga = await _context.Vaga.SingleOrDefaultAsync(m => m.Id == id);

            if (vaga == null)
            {
                return NotFound();
            }

            return Ok(vaga);
        }

        // PUT: api/Vagas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVaga([FromRoute] int id, [FromBody] Vaga vaga)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vaga.Id)
            {
                return BadRequest();
            }

            _context.Entry(vaga).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VagaExists(id))
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

        // POST: api/Vagas
        [HttpPost]
        public async Task<IActionResult> PostVaga([FromBody] Vaga vaga)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Vaga.Add(vaga);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (VagaExists(vaga.Id))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetVaga", new { id = vaga.Id }, vaga);
        }

        // DELETE: api/Vagas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVaga([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var vaga = await _context.Vaga.SingleOrDefaultAsync(m => m.Id == id);
            if (vaga == null)
            {
                return NotFound();
            }

            _context.Vaga.Remove(vaga);
            await _context.SaveChangesAsync();

            return Ok(vaga);
        }

        private bool VagaExists(int id)
        {
            return _context.Vaga.Any(e => e.Id == id);
        }
    }
}