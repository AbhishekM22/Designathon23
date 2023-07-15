import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplyVisaComponent } from './apply-visa/apply-visa.component';
import { AppliedVisaComponent } from './applied-visa/applied-visa.component';
import { TrackApplicationComponent } from './track-application/track-application.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { LoginComponent } from './login/login.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { DocUploadComponent } from './doc-upload/doc-upload.component';
import { HrVisaReqComponent } from './hr-visa-req/hr-visa-req.component';
import { ReqDetailsComponent } from './req-details/req-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'empdash', component: EmpDashboardComponent},
  {path:'',component:LoginComponent},
  {path:'empdash/applyVisa',component:ApplyVisaComponent},
  {path:'empdash/viewVisaReq',component:AppliedVisaComponent},
  {path:'empdash/trackReq',component:TrackApplicationComponent},
  {path:'managerlogin',component:ManagerLoginComponent},
  {path:'hrlogin',component:HrLoginComponent},
  {path:'login',component:LoginComponent},
  {path:'managerdash',component:ManagerDashboardComponent},
  {path:'hrdash',component:HrDashboardComponent},
  {path:'empdash/upload',component:DocUploadComponent},
  {path:'hrdash/visareqs',component:HrVisaReqComponent},
  {path:'managerdash/visareqs',component:HrVisaReqComponent},
  {path:'managerdash/visareqs/view/:reqid',component:ReqDetailsComponent},
  {path:'hrdash/visareqs/view/:reqid',component:ReqDetailsComponent},
  {path:'empdash/contactus',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
