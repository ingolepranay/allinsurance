import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input()parentData:any;
@Output()itemEvent = new EventEmitter <any>();

 dataFromChildToParent:any;

  constructor() {
    this.dataFromChildToParent="This Data From Child To Parent Component"
   }

  ngOnInit(): void {
  }
  sendDataFromParent(){
    console.log("hello");
    this.itemEvent.emit(this.dataFromChildToParent);
  }
  noramlMethodofChild(){
    console.log("Hello this is an event from child cmp");
  }
}
