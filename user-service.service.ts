import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl="http://localhost:8080";
  constructor(private _httpClient:HttpClient) { }

  registerUser(user:any){
    return this._httpClient.post<any>("http://localhost:8080/food-delivery/register", user);
  }

  addrestaurent(user:any){
    return this._httpClient.post<any>("http://localhost:8080/restaurant/", user);
 
  }

  
  getUserList(): Observable<any> {
    return this._httpClient.get("http://localhost:8080/food-delivery/allUser");
    //return this._httpClient.get("http://localhost:8080/food-delivery/allUser");
  }

  getrestaurentList(): Observable<any> {
    return this._httpClient.get("http://localhost:8080/restaurant/getAllresturant");
    //return this._httpClient.get("http://localhost:8080/food-delivery/allUser");
  }

  deleteUser(id: any): Observable<any> {
    console.log("in user service delete"+id)
    return this._httpClient.delete(`${this.baseUrl}/food-delivery/delete-user/${id}`, { responseType: 'text' });
  }

  // login(user:any){
  //   return this._httpClient.post<any>("http://localhost:8082/api/foodapp/login", user);
  // }
}
