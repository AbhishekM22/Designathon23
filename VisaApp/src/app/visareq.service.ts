import { Injectable } from '@angular/core';
import { VisaDetails } from './visadetails';

@Injectable({
  providedIn: 'root'
})
export class VisareqService {

  visareqs: VisaDetails[]=[
    {reqid:1 , empid:1001, empname:"Arpita Das" , purpose: "Onsite Project"  , date_of_application: "05/05/2023"  , applied_from: "01/05/2023" , 
    applied_till:"30/05/2023"   , category: "Employee"     , unit: "Workday"  , country: "UK" , status: "Approved" , visa_type: "wp" , location: "Chennai"  ,
    managerid: 5689   , hrid: 1501},

    {reqid:2, empid:1008, empname:"Sai chandana"  , purpose: "Workshop"  , date_of_application: "19/05/2023" , applied_from: "18/08/2023" , 
      applied_till:"30/10/2023"   , category: "Dependents"     , unit: "Hexavarsity"  , country: "USA" , status: "Rejected" , visa_type: "L1A", location: "Pune"  ,
       managerid: 5781   , hrid: 1566},
    
    {reqid:3, empid:1009, empname:"Sahana Gowda"  , purpose: "Project"  , date_of_application: "23/07/2023" , applied_from: "07/07/2023" , 
       applied_till:"16/11/2023"   , category: "Dependents"     , unit: "Admin Services"  , country: "Netherlands" , status: "Rejected" , visa_type: "1A", location: "Bangalore"  ,
        managerid: 5781   , hrid: 1566},

    {reqid:4, empid:1010, empname:"Abhishek"  , purpose: "Internship"  , date_of_application: "04/11/2022" , applied_from: "23/06/2023" , 
        applied_till:"30/08/2023"   , category: "Employee"     , unit: "Campus Hiring"  , country: "USA" , status: "In Process" , visa_type: "L1", location: "Noida"  ,
         managerid: 5781   , hrid: 1566}
  ]
  constructor() { 
    
    let date = new Date();
    console.log(date);
  }

  getVisaReqs():VisaDetails[]{
    return this.visareqs;
  }

  temp_id:number=5;
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