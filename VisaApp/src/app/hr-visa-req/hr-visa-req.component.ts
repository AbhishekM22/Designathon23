import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisaDetails } from '../visadetails';
import { VisareqService } from '../visareq.service';

@Component({
  selector: 'app-hr-visa-req',
  templateUrl: './hr-visa-req.component.html',
  styleUrls: ['./hr-visa-req.component.css']
})
export class HrVisaReqComponent {
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
