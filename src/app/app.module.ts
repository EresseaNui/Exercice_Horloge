import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimezoneComponentComponent } from './timezone-component/timezone-component.component';
import { HorlogeComponentComponent } from './horloge-component/horloge-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TimezoneComponentComponent,
    HorlogeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
