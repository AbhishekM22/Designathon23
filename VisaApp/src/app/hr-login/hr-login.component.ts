import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-login',
  templateUrl: './hr-login.component.html',
  styleUrls: ['./hr-login.component.css']
})
export class HrLoginComponent {


  constructor(private router:Router){}
 public navigateToHrDash(){
  this.router.navigate(['hrdash']);
 }

 empid:number;
 passw: string;

  

  hrlogin(empid: number, passw: string){
    if(empid==1001 && passw=="hr"){
      this.router.navigate(['hrdash']);
    }
    else{
      alert("Invalid Credentials");
    }
  }
}
