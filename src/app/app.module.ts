import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {NgbdDatepickerRange} from './daterange-picker/daterange-picker.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , NgbModule],
  declarations: [ AppComponent , NgbdDatepickerRange],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
