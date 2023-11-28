using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

public class Program
{
    // Main method is the entry point of the application
    public static void Main(string[] args)
    {
        // Build and run the application
        CreateHostBuilder(args).Build().Run();
    }

    // CreateHostBuilder method configures the host and sets up the startup class
    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                // Use the Startup class to configure the web application
                webBuilder.UseStartup<Startup>();
            });
}

// Startup class configures services and middleware for the application
public class Startup
{
    // ConfigureServices method is called to configure services needed by the application
    public void ConfigureServices(IServiceCollection services)
    {
        // Add support for controllers
        services.AddControllers();
    }

    // Configure method is called to configure the request processing pipeline
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        // Check if the application is in development mode
        if (env.IsDevelopment())
        {
            // Display detailed error pages in development mode
            app.UseDeveloperExceptionPage();
        }

        // Redirect HTTP requests to HTTPS
        app.UseHttpsRedirection();

        // Enable routing for the application
        app.UseRouting();

        // Enable endpoint routing for controllers
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });

        // Seed the database with initial menu data
        using (var scope = app.ApplicationServices.CreateScope())
        {
            var services = scope.ServiceProvider;
            try
            {
                var databaseService = services.GetRequiredService<DatabaseService>();
                MenuInitializer.InitializeMenu(databaseService);
            }
            catch (Exception ex)
            {
                // Handle exceptions if needed
                Console.WriteLine("An error occurred while seeding the database.");
                Console.WriteLine(ex.Message);
            }
        }
    }
}

// Controller class for handling menu-related actions
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
