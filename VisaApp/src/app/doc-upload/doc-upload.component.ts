import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent {

  constructor(private router:Router){}

  public navigateToDash(){
    this.router.navigate(['empdash']);
  }

}
