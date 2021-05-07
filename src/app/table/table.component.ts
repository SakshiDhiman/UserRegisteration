import { DatabindService } from './../databind.service';
import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
 
  displayedColumns: string[] = [ 'firstname', 'lastname', 'email', 'phone' , 'username'];
  item:any;
  item2: any;

  constructor(private databind : DatabindService) {
  }

  ngOnInit(): void {
    this.item=this.databind.getter();
    this.item2=(JSON.stringify(this.item));
    // console.log(this.item2.phone);
    
  
  }
  

}
