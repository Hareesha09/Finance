using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LNT_PROJECT.Models
{
    public class Admin
    {   [Key]
        public int AdminId { get; set; }
        public string MailID { get; set; }
        public string Password{ get; set; }
    }
}
