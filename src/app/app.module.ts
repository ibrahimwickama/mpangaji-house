import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminModeComponent } from './pages/admin-mode/admin-mode.component';
import { UserModeComponent } from './pages/user-mode/user-mode.component';
import {ChartsComponent} from "./analysis-components/charts/charts.component";
import { ToDoListComponent } from './ui-components/admin-components/to-do-list/to-do-list.component';
import { AddAdminComponent } from './ui-components/admin-components/add-admin/add-admin.component';
import { DataEntryComponent } from './ui-components/admin-components/data-entry/data-entry.component';
import { UserProfileComponent } from './ui-components/admin-components/user-profile/user-profile.component';
import { AnnounceComponent } from './ui-components/admin-components/announce/announce.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminModeComponent,
    UserModeComponent,
    ChartsComponent,
    ToDoListComponent,
    AddAdminComponent,
    DataEntryComponent,
    UserProfileComponent,
    AnnounceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
