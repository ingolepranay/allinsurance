import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-first-cmp',
  templateUrl: './first-cmp.component.html',
  styleUrls: ['./first-cmp.component.css']
})
export class FirstCmpComponent implements OnInit {
FirstData:any;
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
  sendDtFromFirst(){
    this.FirstData="This data from first component";
    this.dataSer.setMessage(this.FirstData);
    this.router.navigate(['second']);
  }

}
