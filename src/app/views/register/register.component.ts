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
  checkRepass:boolean;
  pass:string;
  rePass:string;
  msg:string;
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
        Validators.email,
        ]),
      
        
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
    console.log(this.user);
  }
  checkPass(){
    if(this.rePass===this.pass)
    {
      return true;
    }
    else {
      this.formdata.controls['rePassword'].setErrors({ 'incorrect': true });
      return false;
    }

  }
  checkEmail(){
    this.UserService.checkEmail(this.user).subscribe(data =>{
      this.msg=data;
      if(this.msg=='false')
      {
        this.formdata.controls['email'].setErrors({ 'incorrect': true });
      }
    });
  }
}
