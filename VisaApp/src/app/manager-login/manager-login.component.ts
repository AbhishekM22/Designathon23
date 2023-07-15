import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {

  empid:number;
  passw:string;

  constructor(private router:Router) { }
  public navigateToMDash(){
    this.router.navigate(['/managerdash']);
  }

  managerlogin(empid:number,passw:string){
    if(empid==1003 && passw=="manager"){
      this.router.navigate(['/managerdash']);
    }
    else{
      alert("Invalid Credentials");
    }
  }
}
