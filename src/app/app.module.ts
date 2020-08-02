import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UsersListComponent } from './works/users-list/users-list.component';
import { UsersTaskComponent } from './works/users-task/users-task.component';
import { WorkNavBarComponent } from './works/work-nav-bar/work-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CenzorComponent,
    UsersListComponent,
    UsersTaskComponent,
    WorkNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
