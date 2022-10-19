import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.css']
})
export class SampleTestComponent implements OnInit {

  constructor(private api:APIService) { }
  // demoString:any="Hello Angular Testing";

  // checkFlag:boolean=false;

  // subject:any=['One','Two','Three','Four'];
  // subjectFlag:boolean=true;

  data:any;
  data2:any=[];
  ngOnInit(): void {
    this.getData();
    this.sendData();
    this.updateData();

  }
 
  getData(){
    this.api.getApiData().subscribe(
      (res:any)=>{
        this.data2=res;
        console.log(this.data2)
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
    sendData(){
      this.data={
        name:'Pranay',
        // collegeName:'Shivaji clg',
        year:'2022',
        // job:'prof'
        color:'red'
      }
      this.api.sendApiData(this.data).subscribe(
        (res:any)=>{
          console.log(res);
         }
      )
    }

    updateData(){
      this.data={
        name:'Nakul',
        Post:'H.O.D.'
      }
      this.api.updataApiData(this.data).subscribe(
        (res:any)=>{
          console.log(res);
        }
      )
    }
  }