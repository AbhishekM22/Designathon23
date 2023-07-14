import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { ApplyVisaComponent } from './apply-visa/apply-visa.component';
import { AppliedVisaComponent } from './applied-visa/applied-visa.component';
import { TrackapplicationComponent } from './trackapplication/trackapplication.component';

const routes: Routes = [
  {path:'empdash', component: EmpDashboardComponent},
  {path:'',component:HomeComponent},
  {path:'empdash/applyvisa/upload',component:DocumentUploadComponent},
  {path:'empdash/applyvisa', component:ApplyVisaComponent},
  {path:'empdash/viewVisaReq',component:AppliedVisaComponent},
  {path:'empdash/trackReq',component:TrackapplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
