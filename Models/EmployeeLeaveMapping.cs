using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace final.Models
{
    public class EmployeeLeaveMapping
    {
        [Key]
        public int emlid
        { get; set; }
        public int employeeid
        { get; set; }
    public string leaveid
    { get; set; }
public string leavestartdate
        { get; set; }
        public string leaveenddate
        { get; set; }
        public string status
        { get; set; }


    }
}
