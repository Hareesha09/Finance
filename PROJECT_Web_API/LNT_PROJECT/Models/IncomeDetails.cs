using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LNT_PROJECT.Models
{
    public class IncomeDetails
    {
        [Key]
        public int IncomeDeatilsId { get; set; }
        public string PropertyLocation { get; set; }
        public string PropertyName { get; set; }
        public int EstimatedAmount { get; set; }
        public string EmploymentType { get; set; }
        public int RetirementAge { get; set; }
        public string EmployerName { get; set; }
    }
}
