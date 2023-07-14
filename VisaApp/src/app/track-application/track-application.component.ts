import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-track-application',
  templateUrl: './track-application.component.html',
  styleUrls: ['./track-application.component.css']
})
export class TrackApplicationComponent {

  constructor(private router:Router) { }
  public navigateToEmpDash(){
    this.router.navigate(['empdash']);
  }
}
