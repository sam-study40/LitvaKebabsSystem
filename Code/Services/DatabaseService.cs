using LiteDB;
using LitvaKebabsSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LitvaKebabsSystem.Services
{
    public class DatabaseService
    {
        private LiteDatabase _database;
        public DatabaseService() {
            _database = new LiteDatabase(@"./mydatabase");
        }

        public ILiteCollection<MenuItem> GetMenuItemTable()
        {
            return _database.GetCollection<MenuItem>();
        }

        public ILiteCollection<Order> GetOrderTable()
        {
            return _database.GetCollection<Order>();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                _database.Dispose();
            }
        }
    }
}