import { Injectable } from '@angular/core';
import { empData } from './empdata';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {


  empinfo: empData[] = [
    {empid:1000, emp_lname: " Gowda",emp_fname:"Sahana", dob: "11-06-1998", contact_no: "8767546234",
     address_1: "Anand Street", address_2: "Chennai", pincode: 6300160, district :"Eggatur" ,
      state:" Tamil Nadu" , nationality :" India" , aadharno: 8976545780, password:"sahana123"},
      {
        empid:1001, emp_lname: " Das", emp_fname: "Arpita",dob: "07-03-2000", contact_no: "7854790345", 
        address_1: "Gandhi Statue Street", address_2: "Near Ramalayam", pincode: 5200001,
        district :"Vijayawada" , state:" Andhra Pradesh" , nationality :" India" , aadharno: 2435678912, password:"arpitha123"
      }
  ]

  constructor() { }
}
