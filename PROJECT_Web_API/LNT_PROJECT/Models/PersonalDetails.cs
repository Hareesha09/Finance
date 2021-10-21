using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LNT_PROJECT.Models
{
    public class PersonalDetails
    {
        [Key]
        public int UserId { get; set; }
        public string Name { get; set; }
        public string MailID { get; set; }
        public string Password { get; set; }
        public string PhoneNo { get; set; }
        public string Gender { get; set; }
        public string Nationality { get; set; }
        public string AdhaarNo { get; set; }
        public string PanNo { get; set; }
        public int amount { get; set; }
        public string loanStaus { get; set; }
        public string ApplicationId { get; set;}
        public string Remark { get; set; }
    }
}
