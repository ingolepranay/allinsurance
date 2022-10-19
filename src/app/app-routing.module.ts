import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { AuthGuard } from './auth.guard';
import { ParentComponent } from './inter-communication/parent/parent.component';
import { FirstCmpComponent } from './inter-communication/first-cmp/first-cmp.component';
import { SecondCmpComponent } from './inter-communication/second-cmp/second-cmp.component';
import { SampleTestComponent } from './sample-test/sample-test.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'staff/:id/:name', component: StaffComponent},
  {path:'stud', component: StudentComponent, canActivate:[AuthGuard]},
  {path:'contact', component:ContactusComponent,resolve:[AuthGuard]},
  // inter-communication
  {path:'parent', component:ParentComponent},
  {path:'first', component:FirstCmpComponent},
  {path:'second', component:SecondCmpComponent},

  {
    path:'ug',loadChildren:()=>import('./ug/ug.module').then(mod=>mod.UgModule)
  },
  {
    path:'pg',loadChildren:()=>import('./pg/pg.module').then(mod=>mod.PgModule)
  },

  //ng-template
  {path:'sampletest',component:SampleTestComponent},

  {path:'**', component:ErrorComponent}
  // {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
