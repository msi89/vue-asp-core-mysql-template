using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Linq;
using System.Text.Encodings.Web;
using Microsoft.EntityFrameworkCore;
using vide.Models;

namespace vide.Repositories
{
    public class IUsersRepository
    {


        public static IEnumerable<Users> toList()
        {
            MyDbContext db = new MyDbContext();
            return db.Users.ToList();
        }

        public static IEnumerable<Users> Get(string id = "")
        {
            using (var db = new MyDbContext())
            {
                var users = from u in db.Users
                            select u;

                if (!String.IsNullOrEmpty(id))
                {
                    users = users.Where(s => s.Fullname.Contains(id));
                }

                return users.ToList();
            }
        }

        public static async Task<IEnumerable<Users>> GetAsync(string id = "")
        {
            using (var db = new MyDbContext())
            {
                var users = from u in db.Users
                            select u;

                if (!String.IsNullOrEmpty(id))
                {
                    users = users.Where(s => s.Fullname.Contains(id));
                }

                return await users.ToListAsync();
            }
        }


    }
}