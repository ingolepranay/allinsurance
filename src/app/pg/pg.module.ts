import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgadmissionComponent } from './pgadmission/pgadmission.component';
import { PghomeComponent } from './pghome/pghome.component';
import { PgstaffComponent } from './pgstaff/pgstaff.component';
import { PgstudentComponent } from './pgstudent/pgstudent.component';
import {RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';

const route: Routes=[
  {path:'', component: PghomeComponent },
  {path:'pgstaff', component: PgstaffComponent},
  {path: 'pgstudent', component: PgstudentComponent},
  {path: 'pgadmission', component: PgadmissionComponent}
]

@NgModule({
  declarations: [
    PgadmissionComponent,
    PghomeComponent,
    PgstaffComponent,
    PgstudentComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    [RouterModule.forChild(route)]
  ],
  providers:[]
})
export class PgModule { }
