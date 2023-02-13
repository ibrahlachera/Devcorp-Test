import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/Services/projects.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  project:any = {};
  isConnected = false;
  constructor(private userService:UsersService,private projectService:ProjectsService,private route:ActivatedRoute,private router:Router ) { }
  ngOnInit(){
    this.isConnected = this.userService.getToken();
    this.userService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.isConnected = isAuthenticated;
    });
  }
  addProject(){
    this.projectService.addProject(this.project).subscribe(()=>{
      location.reload();
    })
  }
  logout() {
    this.userService.removeToken();
    this.isConnected = false;
    this.router.navigate(['/login']);
 }

}
