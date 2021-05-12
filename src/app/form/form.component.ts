import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  hide = true;
  arraydata: any[]=[];
  data:any;
  // displayedColumns: string[] = ['firstname', 'lastname', 'email','phone','username'];
  
  constructor() { }

  ngOnInit(): void {
  }
  Submit(templateForm : any){
    
    if (templateForm.valid) {
      console.log(templateForm.value);
      
      this.arraydata.push(templateForm.value);
      console.log(this.arraydata);
      templateForm.reset();
      
    }
    
  }
  // onSubmit(form :FormGroup) {
  //   if (this.form.valid) {
      
  //     console.log(form);
  //     this.arraydata.push(form);
      
  //     console.log(this.arraydata);
  //     alert('New row added successfully');
  //     this.form.reset();
      
  //   }
 
  // }
  
  deleteItem(index:any) {  
    if(this.arraydata.length ==1) {  
      alert("Can't delete the row when there is only one row");   
    } else {  
        this.arraydata.splice(index, 1);   
    }  
} 
updateItem(data:any){
  data.isEdit=true;
 }
 closeItem(data:any){
   data.isEdit=false;
 }
 saveItem(data:any){
   data.isEdit=false;
 }

}
