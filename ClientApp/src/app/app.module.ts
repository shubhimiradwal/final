import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LeaveAddComponent } from './leave-add/leave-add.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { MyLeavesComponent } from './my-leaves/my-leaves.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlogindashboardComponent } from './adminlogindashboard/adminlogindashboard.component';
import { EmployeelogindashboardComponent } from './employeelogindashboard/employeelogindashboard.component';
import { LeaveConfigurationComponent } from './leave-configuration/leave-configuration.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    LeaveAddComponent,
    LeaveListComponent,
    MyLeavesComponent,
    ApplyLeaveComponent,
    MyProfileComponent,

    AdminloginComponent,
    EmployeeloginComponent,
    AdminlogindashboardComponent,
    EmployeelogindashboardComponent,
    LeaveConfigurationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
 
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'employeelogin', component: EmployeeloginComponent },
     
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'leave-add', component: LeaveAddComponent },
      { path: 'apply-leave', component: ApplyLeaveComponent },     
      { path: 'leave-list', component: LeaveListComponent },
      { path: 'my-leaves', component: MyLeavesComponent },
      { path: 'my-profile', component: MyProfileComponent },
      
      { path: 'leave-configuration', component: LeaveConfigurationComponent },
      { path: 'adminlogin', component: AdminloginComponent },
      { path: 'adminlogindashboard/:email', component: AdminlogindashboardComponent },
      { path: 'employeelogindashboard', component: EmployeelogindashboardComponent },
    ]),
   
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
