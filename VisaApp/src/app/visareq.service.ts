import { Injectable } from '@angular/core';
import { VisaDetails } from './visadetails';

@Injectable({
  providedIn: 'root'
})
export class VisareqService {

  visareqs: VisaDetails[]=[
    {reqid:3236 , empid:1001, empname:"Arpita Das" , purpose: "Onsite Project"  , date_of_application: "05/05/2023"  , applied_from: "01/05/2023" , 
    applied_till:"30/05/2023"   , category: ""     , unit: ""  , country: "UK" , status: "Approved" , visa_type: "" , location: "Europe"  ,
    managerid: 5689   , hrid: 1501}
  ]
  constructor() { 
    
    let date = new Date();
    console.log(date);
  }

  getVisaReqs():VisaDetails[]{
    return this.visareqs;
  }

  temp_id:number=2;
  status:"Application Submitted";


  date = new Date().toString();
  unit:"Hexavarsity"

  addVisaReq(empid:number,empname:string,purpose:string,date_of_application:string,applied_from:string,applied_till:string,
    category:string,unit:string,country:string,status:string,visa_type:string,location:string, managerid:number,hrid:number){
      this.visareqs.push({reqid:this.temp_id++,empid:empid,empname:empname,purpose:purpose,date_of_application:this.date,applied_from:applied_from,applied_till:applied_till,category:category,unit:this.unit,country:country,status:this.status,visa_type:visa_type,location:location,managerid:managerid,hrid:hrid});
      console.log(`visa Req length ${this.visareqs.length}`);
      console.log(this.visareqs);
    }

  }