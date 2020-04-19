import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { employeeuse } from '../../file';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  e1: Array<employeeuse>;
    Dataservices: any;
  constructor(private Dataservice: DataserviceService) { }

  ngOnInit() {
    this.Dataservice.getEmployees().subscribe(
      e1 => {
        return this.e1 = e1;
      });
  }

}
