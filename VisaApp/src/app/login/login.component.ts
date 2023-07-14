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
    else{
      alert("Invalid Credentials");
    }
  }
}
