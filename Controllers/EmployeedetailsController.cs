using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using final.Migrations;
using final.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace final.Controllers
{
    public class EmployeedetailsController : Controller
    {
        private readonly AppDbContext _context;
     
        public EmployeedetailsController(AppDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Employee_details employee)
        {
            if (ModelState.IsValid)
            {
                _context.Employee.Add(employee);
                _context.SaveChanges();
                return RedirectToAction("/employee-list");
            }
            return View(employee);

        }

        // GET: /CRUD/Details/5  
        [HttpPost]
        public ActionResult Delete(int id )
        {
            Employee_details employee = _context.Employee.Find(id);
            if (employee == null)
            {
                return HttpNotFound();
            }
            return View(employee);
        }

        private ActionResult HttpNotFound()
        {
            throw new NotImplementedException();
        }
        [HttpPost]
        public ActionResult Details(int id)
        {
           Employee_details employee= _context.Employee.Find(id);
            if (employee == null)
            {
                return HttpNotFound();
            }
            return View(employee);
        }
    }
}
