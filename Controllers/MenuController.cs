// Import LiteDB for database operations
using LiteDB;
// Import Microsoft.AspNetCore.Mvc for creating Web API controllers
using Microsoft.AspNetCore.Mvc;
// Import System.Collections.Generic for using IEnumerable<T> in action methods
using System.Collections.Generic;

// Set the namespace to match the folder structure of your project
namespace LitvaKebabsSystem.Controllers
{
    // Declare that this class is a Web API controller
    [ApiController]
    // Define the base route for the controller
    [Route("api/[controller]")]
    public class MenuController : ControllerBase
    {
        // Private field to hold the LiteDB instance injected via constructor
        private readonly LiteDatabase _liteDb;

        // Constructor to inject LiteDB instance when the controller is created
        public MenuController(LiteDatabase liteDb)
        {
            _liteDb = liteDb;
        }

        // Action method for handling HTTP GET requests to /api/menu
        [HttpGet]
        public ActionResult<IEnumerable<MenuItem>> GetMenu()
        {
            // Retrieve the collection of menu items from the LiteDB database
            var menuCollection = _liteDb.GetCollection<MenuItem>("menu");
            // Retrieve all menu items from the collection
            var menuItems = menuCollection.FindAll();
            // Return the menu items as a response
            return Ok(menuItems);
        }

        // Add other CRUD operations as needed, for example:

        // Action method for handling HTTP POST requests to add a new menu item
        [HttpPost]
        public ActionResult<MenuItem> AddMenuItem([FromBody] MenuItem menuItem)
        {
            // Retrieve the collection of menu items from the LiteDB database
            var menuCollection = _liteDb.GetCollection<MenuItem>("menu");
            // Insert the new menu item into the collection
            menuCollection.Insert(menuItem);
            // Return the added menu item as a response
            return Ok(menuItem);
        }

        // Action method for handling HTTP PUT requests to update a menu item
        [HttpPut("{id}")]
        public ActionResult<MenuItem> UpdateMenuItem(int id, [FromBody] MenuItem updatedMenuItem)
        {
            // Retrieve the collection of menu items from the LiteDB database
            var menuCollection = _liteDb.GetCollection<MenuItem>("menu");
            // Find the existing menu item by its ID
            var existingMenuItem = menuCollection.FindOne(x => x.Id == id);

            // If the menu item with the specified ID is not found, return a 404 Not Found response
            if (existingMenuItem == null)
            {
                return NotFound();
            }

            // Update the properties of the existing menu item with the new values
            existingMenuItem.Name = updatedMenuItem.Name;
            existingMenuItem.Price = updatedMenuItem.Price;

            // Update the existing menu item in the collection
            menuCollection.Update(existingMenuItem);

            // Return the updated menu item as a response
            return Ok(existingMenuItem);
        }

        // Action method for handling HTTP DELETE requests to delete a menu item
        [HttpDelete("{id}")]
        public IActionResult DeleteMenuItem(int id)
        {
            // Retrieve the collection of menu items from the LiteDB database
            var menuCollection = _liteDb.GetCollection<MenuItem>("menu");
            // Find the existing menu item by its ID
            var existingMenuItem = menuCollection.FindOne(x => x.Id == id);

            // If the menu item with the specified ID is not found, return a 404 Not Found response
            if (existingMenuItem == null)
            {
                return NotFound();
            }

            // Delete the existing menu item from the collection
            menuCollection.Delete(id);

            // Return a 204 No Content response to indicate successful deletion
            return NoContent();
        }

        // Dispose of the LiteDB instance when the controller is finalized
        // This is necessary to release resources and close the database connection
        ~MenuController()
        {
            _liteDb?.Dispose();
        }
    }
}
