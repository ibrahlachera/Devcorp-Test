import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
 user:any = {}
 
  constructor(private userService: UsersService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }


  
  log() {
  
    this.userService.getLogin(this.user).subscribe((res: any) => {
     if(res.status) {
       this.userService.setAuthStatusListener(true);
       localStorage.setItem('token', res.authorisation.token);
       this.router.navigate(['/list-project']);
  
      } 

   })
    

  }
}
