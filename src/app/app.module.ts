import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule} from '@angular/common/http';
import { ParentComponent } from './inter-communication/parent/parent.component';
import { ChildComponent } from './inter-communication/parent/child/child.component';
import { FirstCmpComponent } from './inter-communication/first-cmp/first-cmp.component';
import { SecondCmpComponent } from './inter-communication/second-cmp/second-cmp.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleTestComponent } from './sample-test/sample-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    StudentComponent,
    HomeComponent,
    StaffComponent,
    ErrorComponent,
    ParentComponent,
    ChildComponent,
    FirstCmpComponent,
    SecondCmpComponent,
    SampleTestComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
