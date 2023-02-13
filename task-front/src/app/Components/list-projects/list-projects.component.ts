import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/Services/projects.service';
import { UsersService } from 'src/app/Services/users.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent {
  projects:any = [];

  constructor(private projectService:ProjectsService,private userService:UsersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(){
    this.listProject()
  }

 
  listProject(){
    let email:any = jwt_decode(localStorage.getItem('token')!)
    this.userService.getUserByMail(email.email).subscribe((user:any)=>{
      this.userService.getProjectsOfUser(user.data.id).subscribe((projects:any)=>{
projects.data.forEach((project:any)=>{
   this.projectService.getProject(project.project_id).subscribe((data:any)=>{
      this.projects.push(data.data);
    })
})
      })
    })
   
  }
}
