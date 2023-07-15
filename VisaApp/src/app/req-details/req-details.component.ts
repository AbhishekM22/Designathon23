import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisareqService } from '../visareq.service';


@Component({
  selector: 'app-req-details',
  templateUrl: './req-details.component.html',
  styleUrls: ['./req-details.component.css']
})
export class ReqDetailsComponent {

  reqid:any=0;
  req : any={};

  ngOnInit(): void {
    this.reqid = this.activeRoute.snapshot.paramMap.get("reqid");
    this.visaService.getVisaReqs().forEach(e =>{
      if(e.reqid==this.reqid)
      this.req=e;
    })
  }

  constructor(public visaService:VisareqService,
    private activeRoute:ActivatedRoute, private router:Router) { }

    public navigateToDash(){
      this.router.navigate(['empdash']);
    }
}
