import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisaDetails } from '../visadetails';
import { VisareqService } from '../visareq.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {

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
