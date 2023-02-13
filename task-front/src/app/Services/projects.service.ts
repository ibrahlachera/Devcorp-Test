import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url = "http://localhost:8000/api/";
  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get(`${this.url}projects`)
  }

  addProject(project:any){
    return this.http.post(`${this.url}projects`,project)
  }
  getProject(id:any){
    return this.http.get(`${this.url}projects/${id}`)
  }
}
