import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  email:string;
  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  adminlogin(){
    if (this.email == 'shubhi@gmail.com') {
      this.router.navigate(['/adminlogindashboard/1']);
    }
    else {
      alert("incorrect");
    }
  }

}
