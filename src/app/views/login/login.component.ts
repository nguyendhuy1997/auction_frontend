import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private UserService: UserService, private router: Router) { }
  user = {
    email: '',
    password: '',
  };
  result: any;
  message:boolean;
  ngOnInit() {
    this.message=true;
  }
  getLogin() {
    this.UserService.login(this.user).subscribe((data) => {
      this.result = data;
      console.log(this.result);
      if (this.result != null && this.result != false) {
        localStorage.setItem('user_id', this.result.id);
        localStorage.setItem('email',this.result.email);
        localStorage.setItem('money',this.result.money);
        localStorage.setItem('role',this.result.role); 
        this.router.navigate(['']);
      }
      else{
        this.message=false;
        console.log(this.message);
      }
    });



  }


}
