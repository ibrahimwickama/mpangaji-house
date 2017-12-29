import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminModeComponent } from './pages/admin-mode/admin-mode.component';
import { UserModeComponent } from './pages/user-mode/user-mode.component';
import {ChartsComponent} from "./analysis-components/charts/charts.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminModeComponent,
    UserModeComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
