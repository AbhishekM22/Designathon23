import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisaDetails } from '../visadetails';
import { VisareqService } from '../visareq.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent {

  visaReqs: VisaDetails[]=[];
  constructor(private router:Router,
    public visareqService:VisareqService){}
  ngOnInit(): void {
    this.visaReqs=this.visareqService.getVisaReqs();
    console.log(this.visaReqs);
  }
  public toHrDash(){
    this.router.navigate(['hrdash']);
  }
}
