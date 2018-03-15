import { Component } from '@angular/core';
import {FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'app';
  myformvalues : FormGroup ;

  constructor(private fb : FormBuilder )
  {
     this.createform()
  }

  createform(): any
  {
    this.myformvalues = this.fb.group({
         food : ['Pes' , [Validators.required]] ,
         comment : ['Yes it Good As Always' ,[Validators.required]]
    })
  }

  Submit(value) : any 
  {   
    alert(JSON.stringify(value))
  }

  SubmitReactive(value : any) : any 
  {
     alert(JSON.stringify(value))

  }


  // a single Form Control 
  SingleFood = new FormControl("Hey");
 
}
