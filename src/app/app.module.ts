// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { FormComponent } from './form/form.component';
import { TaskComponent } from './task/task.component';
import { details } from './module/formAction';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    FormComponent , 
    TaskComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
