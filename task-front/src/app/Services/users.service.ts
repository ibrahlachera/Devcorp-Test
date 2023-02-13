import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:8000/api/";
  token: string = "";
  
 
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.url}users`)
  }
  getUser(id:any){
    return this.http.get(`${this.url}users/${id}`)
  }
  getUserInProject(id:any){
    return this.http.get(`${this.url}users_in_project/${id}`)
  }
  getProjectsOfUser(id:any){
    return this.http.get(`${this.url}projects_with_user/${id}`)
  }
  
  addMembersInProject(data:any){
    return this.http.post(`${this.url}users_in_project`,data)
  }

  getUserByMail(email:any){
    return this.http.get(`${this.url}user_by_mail/${email}`)
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  setAuthStatusListener(etat: boolean) {
    this.authStatusListener.next(etat);
  }


  getLogin(user:any) {
    return this.http.post(`${this.url}login`,{email: user.email,password:user.password});
  }


  getToken() {
    return !!localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
