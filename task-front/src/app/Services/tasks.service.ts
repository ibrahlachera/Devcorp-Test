import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url = "http://localhost:8000/api/";
  constructor(private http: HttpClient) { }

  getTasksOfProject(id:any){
    return this.http.get(`${this.url}projects_tasks/${id}`)
  }
  getTask(id:any){
    return this.http.get(`${this.url}tasks/${id}`)
  }
  editTask(task:any){
    return this.http.put(`${this.url}tasks/${task.task_id}`,task)
  }
  addTask(task:any){
    return this.http.post(`${this.url}tasks`,task)
  }
}
