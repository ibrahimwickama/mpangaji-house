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
import { AnnouncementComponent } from './ui-components/user-components/announcement/announcement.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ApartmntListingComponent } from './pages/apartmnt-listing/apartmnt-listing.component';
import {FormsModule} from "@angular/forms";
import {HpptProviderService} from "./services/hppt-provider.service";
import {HttpModule} from "@angular/http";
import { AddApartmentComponent } from './ui-components/user-components/add-apartment/add-apartment.component';

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
    AnnounceComponent,
    AnnouncementComponent,
    LoginComponent,
    SignupComponent,
    ApartmntListingComponent,
    AddApartmentComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule
  ],
  providers: [HpptProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
