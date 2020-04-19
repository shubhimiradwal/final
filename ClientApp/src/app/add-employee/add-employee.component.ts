import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { employeeuse } from '../../file';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee1: employeeuse = {
    employeeid: 0,
    employeename: '',
    dob: '',
    doj: '',
    salary:0,
    email: '',
  };
  
  constructor(private Dataservice: DataserviceService,private route: Router ) { }

  ngOnInit() {
  
    
  }
  addemp() {
    this.Dataservice.addEmployees(this.employee1).subscribe(
      () => {       
        console.log("employee addded");
        

      }
    )
  }
}
