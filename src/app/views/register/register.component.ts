import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { ValidatorFn,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private UserService: UserService,private router: Router) { }
  user = {
    email: '',
    username:'',
    password:'',
  };
  pass:string;
  rePass:string;
  msg:string;
  msg1:string;
  result:boolean;
  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('')])
      ),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$')]),
        
      ),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)])
      ),
      rePassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)]))
    });
  }
  onSubmit() {
    this.user=this.formdata.value;    
    this.UserService.register(this.user).subscribe(data=>{
      const temp= data;
      console.log(temp);
      this.router.navigate(['login']);
    });
  }
  checkPass(){
    if(this.rePass==this.pass)
    {
      return true;
    }
    else {
      return false;
    }
  }
  checkEmail(){
    this.UserService.checkEmail(this.user).subscribe(data =>{
      this.msg=data;
    });
  }
}
