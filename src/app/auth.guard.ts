import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './common-service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private mySer1:ServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



let roleId=1; //roleId data from backend or database
// 1===>principal;
// 2===>staff
// 3===>student
// 4===>admin
if(roleId===3){
  return true;
}else
    return false;

  }
  
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot,mySer1:ServiceService){
    console.log("Hello this is resolver");
    console.log(this.mySer1.checkStudData());
    this.mySer1.checkStudData().subscribe(
      (res:any)=>{
        console.log(res);
        return true;
      }
    )
   
  }
}
