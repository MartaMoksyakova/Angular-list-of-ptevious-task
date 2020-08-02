import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkNavBarComponent } from './works/work-nav-bar/work-nav-bar.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UsersTaskComponent } from './works/users-task/users-task.component';
import { UsersListComponent } from './works/users-list/users-list.component';

const routes: Routes = [
  {path:'',  pathMatch: 'full', redirectTo: 'home'},
  {path:'home',  component: HomeComponent},
  {path: 'works', component: WorkNavBarComponent, children: [ 
    {path:'cenzor',  component: CenzorComponent },
    {path:'task',  component: UsersTaskComponent },
    {path:'users',  component: UsersListComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
