import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeuse } from '../file';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient, private route: Router) {
  }
  getEmployees(): Observable<employeeuse[]> {
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json'
    })
    return this.http.get<employeeuse[]>('/employee-list')
  }
  addEmployees(emp: employeeuse): Observable<void> {
    return this.http.post<void>('/employee-list', emp, {
      headers: new HttpHeaders({
        'content-type': 'application-json'
      })
    });
  }

  
 
 
}
