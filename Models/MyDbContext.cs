using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace vide.Models
{
    public class MyDbContext : DbContext
    {

        // public MyDbContext(DbContextOptions options) : base(options)
        // {
        // }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder()
                                   .SetBasePath(Directory.GetCurrentDirectory())
                                   .AddJsonFile("appsettings.json");
            var configuration = builder.Build();
            optionsBuilder.UseMySql(configuration.GetConnectionString("MySQLConnection"));
            // optionsBuilder.UseSqlServer(configuration["ConnectionStrings:DefaultConnection"]);
            // optionsBuilder.UseMySql(@"server=localhost;database=db_dev_build;uid=root;pwd=rooot");

        }
        public DbSet<Users> Users { get; set; }
    }
}