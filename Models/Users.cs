using System;
using vide.Repositories;

namespace vide.Models
{
    public class Users : IUsersRepository
    {
        public int Id { get; set; }
        public string Fullname { get; set; }
        public string Uid { get; set; }
        public string Pwd { get; set; }
        public string Email { get; set; }
        public DateTime Created { get; set; }

    }

}