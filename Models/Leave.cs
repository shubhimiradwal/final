using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace final.Models
{
    public class Leave
    {
        [Key]
        public int leaveid
        { get; set; }
        public string leavename
        { get; set; }
        public int maxleaveallowed
        { get; set; }
    }
}
