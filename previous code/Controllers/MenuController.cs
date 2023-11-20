// MenuController.cs

using Microsoft.AspNetCore.Mvc;

namespace YourProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuController : ControllerBase
    {
        // Action method for handling HTTP GET requests to /api/menu
        [HttpGet]
        public ActionResult<string> Get()
        {
            // Return a simple response
            return Ok("Hello from MenuController!");
        }
    }
}
