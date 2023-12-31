import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ApplyVisaComponent } from './apply-visa/apply-visa.component';
import { AppliedVisaComponent } from './applied-visa/applied-visa.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocUploadComponent } from './doc-upload/doc-upload.component';
import { TrackApplicationComponent } from './track-application/track-application.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { HrVisaReqComponent } from './hr-visa-req/hr-visa-req.component';
import { FiltersComponent } from './filters/filters.component';
import { ReqDetailsComponent } from './req-details/req-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpDashboardComponent,
    HrDashboardComponent,
    ManagerDashboardComponent,
    ApplyVisaComponent,
    AppliedVisaComponent,
    HomeComponent,
    NavbarComponent,
    DocUploadComponent,
    TrackApplicationComponent,
    ManagerLoginComponent,
    HrLoginComponent,
    HrVisaReqComponent,
    FiltersComponent,
    ReqDetailsComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
