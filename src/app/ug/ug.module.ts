import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgcourseComponent } from './ugcourse/ugcourse.component';
import { UghomeComponent } from './ughome/ughome.component';
import { UgstaffComponent } from './ugstaff/ugstaff.component';
import { UgstduentComponent } from './ugstduent/ugstduent.component';
import { Routes,RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';

const route: Routes=[
  {path:'', component: UghomeComponent },
  {path:'ugstaff', component: UgstaffComponent},
  {path: 'ugstud', component:UgstduentComponent},
  {path: 'ugcourses', component: UgcourseComponent}
]

@NgModule({
  declarations: [
    UgcourseComponent,
    UghomeComponent,
    UgstaffComponent,
    UgstduentComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    [RouterModule.forChild(route)]
  ],
  providers:[]
})
export class UgModule { }
