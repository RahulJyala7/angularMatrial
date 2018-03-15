import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , FormBuilder , FormGroup , FormControl , ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import {  } from '@angular/material';
//import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import {MaterialModule} from './app.matrialmodule'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , MaterialModule ,FormsModule ,BrowserAnimationsModule , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
