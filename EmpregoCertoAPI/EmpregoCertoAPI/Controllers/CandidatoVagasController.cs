using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmpregoCertoAPI.Models;
using Microsoft.AspNetCore.Cors;

namespace EmpregoCertoAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/CandidatoVagas")]
    [EnableCors("CorsPolicy")]
    public class CandidatoVagasController : Controller
    {
        private readonly EmpregoCertoDBContext _context;

        public CandidatoVagasController(EmpregoCertoDBContext context)
        {
            _context = context;
        }

        // GET: api/CandidatoVagas
        [HttpGet]
        public IEnumerable<CandidatoVaga> GetCandidatoVaga()
        {
            return _context.CandidatoVaga;
        }

        // GET: api/CandidatoVagas/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCandidatoVaga([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidatoVaga = await _context.CandidatoVaga.SingleOrDefaultAsync(m => m.Id == id);

            if (candidatoVaga == null)
            {
                return NotFound();
            }

            return Ok(candidatoVaga);
        }

        // PUT: api/CandidatoVagas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidatoVaga([FromRoute] int id, [FromBody] CandidatoVaga candidatoVaga)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != candidatoVaga.Id)
            {
                return BadRequest();
            }

            _context.Entry(candidatoVaga).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidatoVagaExists(id))
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

        // POST: api/CandidatoVagas
        [HttpPost]
        public async Task<IActionResult> PostCandidatoVaga([FromBody] CandidatoVaga candidatoVaga)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CandidatoVaga.Add(candidatoVaga);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CandidatoVagaExists(candidatoVaga.Id))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCandidatoVaga", new { id = candidatoVaga.Id }, candidatoVaga);
        }

        // DELETE: api/CandidatoVagas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCandidatoVaga([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidatoVaga = await _context.CandidatoVaga.SingleOrDefaultAsync(m => m.Id == id);
            if (candidatoVaga == null)
            {
                return NotFound();
            }

            _context.CandidatoVaga.Remove(candidatoVaga);
            await _context.SaveChangesAsync();

            return Ok(candidatoVaga);
        }

        private bool CandidatoVagaExists(int id)
        {
            return _context.CandidatoVaga.Any(e => e.Id == id);
        }
        
        [HttpGet()]
        [Route("GetVagasCandidato/{idCandidato}")]
        public async Task<IActionResult> GetVagasCandidato([FromRoute] int idCandidato)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidatoVaga = await _context.CandidatoVaga.SingleOrDefaultAsync(m => m.IdCandidato == idCandidato);

            if (candidatoVaga == null)
            {
                return NotFound();
            }

            return Ok(candidatoVaga);
        }
        
        [HttpGet()]
        [Route("GetCandidatosVaga/{idVaga}")]
        public async Task<IActionResult> GetCandidatosVaga([FromRoute] int idVaga)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidatoVaga = await _context.CandidatoVaga.SingleOrDefaultAsync(m => m.IdVaga == idVaga);

            if (candidatoVaga == null)
            {
                return NotFound();
            }

            return Ok(candidatoVaga);
        }
    }
}