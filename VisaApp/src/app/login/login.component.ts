import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  empid:number;
 passw: string;

  constructor(private router:Router){}
  public navigateToEmpDash(){
    this.router.navigate(['empdash']);
  }

  login(empid: number, passw: string){
    if(empid==1001 && passw=="abc"){
      this.router.navigate(['empdash']);
    }
    else if(empid==1002 && passw=="hr"){
      this.router.navigate(['hrdash']);
    }
    else if(empid==1003 && passw=="manager"){
      this.router.navigate(['managerdash']);
    }
    else{
      alert("Invalid Credentials");
    }
  }
}
