import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Input() all:number=0;
  @Input() ap:number=0;
  @Input() rj:number=0;
  @Input() ip:number=0;

  filterOp:string="all";

  @Output()
  filteredOp:EventEmitter<string>=new EventEmitter<string>();

  optionChanged(event:any){
    this.filteredOp.emit(this.filterOp);
}

}