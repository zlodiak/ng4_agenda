import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AgendaService } from './services/agenda.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OrderModule,
  	MatButtonModule,
  	MatTabsModule,
  	BrowserAnimationsModule,
  	HttpModule,
    BrowserModule
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
