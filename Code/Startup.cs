public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // Your existing configuration...

    app.UseSpa(spa =>
    {
    spa.Options.SourcePath = "wwwroot/react-app";

    if (env.IsDevelopment())
    {
        spa.UseReactDevelopmentServer(npmScript: "start");
    }
});


    // Seed the database with initial menu data (optional, based on your needs)
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
