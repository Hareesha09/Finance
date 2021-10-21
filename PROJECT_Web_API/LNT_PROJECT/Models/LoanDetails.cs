using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LNT_PROJECT.Models
{
    public class LoanDetails
    {
        [Key]
        public int LoanId { get; set; }
        public int MaxLoanGrant { get; set; }
        public float InterestRate { get; set; }
        public int Tenure { get; set; }
        public int LoanAmount { get; set; }
    }
}
