using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LNT_PROJECT.Models
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)

        {

            //Empty constructor….

        }

        public DbSet<IncomeDetails> IncomeDetails { get; set; }
        public DbSet<LoanDetails> LoanDetails { get; set; }
        public DbSet<PersonalDetails> PersonalDetails{ get; set; }
        public DbSet<Admin> Admin { get; set; }


    }
}
