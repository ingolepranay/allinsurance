import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-second-cmp',
  templateUrl: './second-cmp.component.html',
  styleUrls: ['./second-cmp.component.css']
})
export class SecondCmpComponent implements OnInit {
data:any;
  constructor(private dataSer:DataSharingService,private router:Router) {
    this.dataSer.getMessage().subscribe(
      (res:any)=>{
        console.log(res);
        this.data=res;
      }
    )
   }

  ngOnInit(): void {
  }
  sendDtFromSecond(){
    let dt="this is the data from second component to firt component"
    this.dataSer.setMessage(dt);
    this.router.navigate(['first']);
  }

}
