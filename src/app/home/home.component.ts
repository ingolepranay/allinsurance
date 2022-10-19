import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  staffData:any=[
    { name:'Pranay',age:26, id:11 },
    { name: 'Shubham', age: 28, id:12 },
    { name:'Nakul', age:25, id:13}
  ]
  ngOnInit(): void {
  }

  showDetailsStaff(dt:any){
    console.log(dt);
    let id = dt.id;
    let name = dt.name;
    this.router.navigateByUrl(`staff/${id}/${name}`);


  }

}
