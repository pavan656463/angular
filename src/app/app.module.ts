// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    FormComponent , 
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
