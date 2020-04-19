using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace final.Models
{
    public class AppDbContext: DbContext
    {
        
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Employee_details> Employee { get; set; }
        public DbSet<Leave> Leave { get; set; }
        public DbSet<EmployeeLeaveMapping> EmpLeaves { get; set; }
    }
}

