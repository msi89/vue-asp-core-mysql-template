using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using vide.Models;

namespace vide.Controllers
{

    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Users> Get()
        {
            return Users.toList();
        }
    }
}