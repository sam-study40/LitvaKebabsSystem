// MenuInitializer.cs
using LiteDB;
using LitvaKebabsSystem.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace LitvaKebabsSystem.Services

{
    public static class MenuInitializer
    {
        public static void InitializeMenu(DatabaseService databaseService)
        {
            var menuJson = File.ReadAllText("menu.json");
            var menuData = JsonSerializer.Deserialize<MenuData>(menuJson);

            // Access the collections
            var menuItemCollection = databaseService.GetMenuItemTable();

            // Add menu items
            AddMenuItems(menuItemCollection, menuData.Food);
            AddMenuItems(menuItemCollection, menuData.Drinks);
            AddMenuItems(menuItemCollection, menuData.Sides);
            AddMenuItems(menuItemCollection, menuData.Sauces);
        }

        private static void AddMenuItems(ILiteCollection<MenuItem> collection, List<MenuItem> menuItems)
        {
            if (!collection.Exists())
            {
                collection.InsertBulk(menuItems);
            }
        }
    }
}