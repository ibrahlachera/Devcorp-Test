import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/Services/tasks.service';
import { UsersService } from 'src/app/Services/users.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-list-tasks-project',
  templateUrl: './list-tasks-project.component.html',
  styleUrls: ['./list-tasks-project.component.css']
})
export class ListTasksProjectComponent {
  tasks:any = [];
  users:any = [];
  members:any = [];
  task:any = {};
  task_edit:any = {};
  task_add:any = {
    task_title:"",
    task_description:"",
    task_state:"To-do",
    user_id:0
  };
  new_members:any = {};
  id:any;
  name:any = "";
  constructor(private taskService:TasksService,private userService:UsersService,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id=params['id'];
  })
    this.listTasks()
  }

  listTasks(){
    this.taskService.getTasksOfProject(this.id).subscribe((data:any)=>{
      this.tasks = data.data.tasks
      this.tasks.forEach((task:any)=>{
         this.userService.getUser(task.user_id).subscribe((user:any)=>{
          task.name = user.data.name
         })
      })
    })
  }
  openModal(id:any){
    this.taskService.getTask(id).subscribe((data:any)=>{
      this.task = data.data
    })
  }
  closeModal(){
    this.task= {}
  }

  openModalEdit(id:any){
    this.users = []
    this.task_edit= {}
    this.userService.getUserInProject(this.id).subscribe((data:any)=>{
      data.data.forEach((user:any) => {
       this.userService.getUser(user.user_id).subscribe((userInfo:any)=>{
        this.users.push(userInfo.data)
       })
      });
    })
    this.taskService.getTask(id).subscribe((data:any)=>{
      this.task_edit = data.data
    })
  }
  openAddMemebersModal(){
this.userService.getUsers().subscribe((data:any)=>{
  this.members = data.data
})
  }
  openAddModal(){
    this.users = []
    this.userService.getUserInProject(this.id).subscribe((data:any)=>{
      data.data.forEach((user:any) => {
       this.userService.getUser(user.user_id).subscribe((userInfo:any)=>{
        this.users.push(userInfo.data)
       })
      });
    })
  }
  submit(){
    this.taskService.editTask(this.task_edit).subscribe(()=>{
      this.listTasks()
      })
}
submitAdd(){
  this.task_add.project_id = this.id;
  this.taskService.addTask(this.task_add).subscribe(()=>{
    this.listTasks()
    })
}

submitAddMemebers(){
  this.new_members.project_id = this.id;
  this.userService.addMembersInProject(this.new_members).subscribe(()=>{
    this.listTasks()
    })
}
}
