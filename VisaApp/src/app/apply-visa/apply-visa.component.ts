import { Component } from '@angular/core';
import { VisareqService } from '../visareq.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-visa',
  templateUrl: './apply-visa.component.html',
  styleUrls: ['./apply-visa.component.css']
})
export class ApplyVisaComponent {

  empid:number;
  empname:string;
  purpose:string;
  date_of_application:string;
  applied_from:string;
  applied_till:string;
  category:string;
  unit:string;
  country:string;
  status:string = 'In Process';
  visa_type:string;
  location:string;
  managerid:number;
  hrid : number;

  constructor(public visaService:VisareqService, private router:Router) { }

  saveReq(){
    this.visaService.addVisaReq(this.empid,this.empname,this.purpose,this.date_of_application,this.applied_from,this.applied_till,this.category,this.unit,this.country,this.status,this.visa_type,this.location,this.managerid,this.hrid);
    this.empid=0;
    this.empname="";
    this.purpose="";
    this.date_of_application="";
    this.applied_from="";
    this.applied_till="";
    this.category="";
    this.unit="";
    this.country="";
    this.status="";
    this.visa_type="";
    this.location="";
    this.managerid=0;
    this.hrid=0;
    
  }

  public gotodash(){
    this.router.navigate(['empdash']);
  }

}
