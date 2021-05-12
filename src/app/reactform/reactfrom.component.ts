import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactfrom.component.html',
  styleUrls: ['./reactfrom.component.css']
})
export class ReactformComponent implements OnInit {
 
  form: FormGroup;
  hide = true;
  arraydata:any=[];

  

  constructor( public fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['',Validators.required],
      lastname:['',Validators.required],
      email: ['',[Validators.required,Validators.email,UsernameValidators.emailBeUnique(this.arraydata)]],
      phone: ['',[Validators.required,Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      username: ['',[Validators.required,UsernameValidators.cannotContainSpace,UsernameValidators.shouldBeUnique(this.arraydata)]],
      password: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+[0-9]+$'),Validators.minLength(6)]]
    })
  }
  
  onSubmit(form :FormGroup) {
    if (this.form.valid) {
      
      console.log(form);
      this.arraydata.push(form);
      
      console.log(this.arraydata);

      this.form.reset();
      
    }
    
  }
  onClear(){
    this.form.reset();
  }
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
