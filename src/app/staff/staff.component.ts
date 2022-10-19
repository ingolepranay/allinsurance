import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffId:any;
  staffName:any;

  constructor(private actRouter: ActivatedRoute) {

     // 1. Route Param (Direct Values)
    console.log(this.actRouter.snapshot.params);
    this.staffId = this.actRouter.snapshot.params['id'];
    this.staffName = this.actRouter.snapshot.params['name'];


    // 2. Param Map (Obserrvable values)
    
    console.log(this.actRouter.paramMap);
    
    this.actRouter.paramMap.subscribe((res:any)=>{
      console.log(res);
      this.staffId = res.params.id;
      this.staffName= res.params.name;
    })




   }

  ngOnInit(): void {
  }

}
