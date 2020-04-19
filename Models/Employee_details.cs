using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace final.Models
{
    public class Employee_details
    {
        [Key]
        public int employeeid
        { get; set; }
        public string employeename
        { get; set; }
        public string dob { get; set; }
        public string doj
        { get; set; }
        public int salary
        { get; set; }
        public string email
        { get; set; }
}
}
