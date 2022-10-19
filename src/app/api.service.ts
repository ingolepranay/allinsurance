import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getApiData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }


  sendApiData(dt:any){
    return this.http.post('https://reqres.in/api/users',dt)
  }


  updataApiData(dt1:any){
    return this.http.put('https://reqres.in/api/users/2',dt1)
  }
}
// 