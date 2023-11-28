using LiteDB;
using LitvaKebabsSystem.Models;
using System.Collections.Generic;

namespace LitvaKebabsSystem.Services
{
    public class MenuService
    {
        private DatabaseService _databaseService;
        private ILiteCollection<MenuItem> _menuItemTable;

        public MenuService()
        {
            _databaseService = new DatabaseService();
            _menuItemTable = _databaseService.GetMenuItemTable();
        }

        public List<MenuItem> GetAllMenuItems()
        {
            return _menuItemTable.Query().ToList();
        }

        public MenuItem GetMenuItem(int id)
        {
            return _menuItemTable.Query().Where(x => x.Id == id).First();
        }

        public void UpdateMenuItem(MenuItem menuItem)
        {
            _menuItemTable.Update(menuItem);
        }

        public void DeleteMenuItem(int id)
        {
            _menuItemTable.Delete(id);
        }
    }
}
