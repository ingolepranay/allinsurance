import { AfterViewInit, Component, OnInit,  ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    dataFromParentToChild:any
    dataFromChildToParent:any;

    @ViewChild(ChildComponent) childCmp:any;
  constructor() { 
    this.dataFromParentToChild = "This Data Parent To Child Component";
  }
  ngOnInit(): void {
  }

    ngAfterViewInit(){
    
    
      this.childCmp.noramlMethodofChild();
      console.log(this.childCmp.dataFromChildToParent);
    }
  
  
  emitDataFromChild(ev:any){
  console.log("This is custom event");
  this.dataFromChildToParent= ev;
  }
  
  
  }
  