import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/utility/user-service.service';
import { UserloginService } from 'src/app/utility/userlogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  isPhonePortrait = false;
  loginForm:FormGroup | any=this.fb.group({

    userEmail: new FormControl('', [Validators.required]),
      
    userPassword: new FormControl('', [Validators.required]),
  });
  
  constructor( private fb:FormBuilder,private _userloginservice:UserloginService,private router:Router) {


  }
  
   
  ngOnInit(): void {


  }

 
  // onSubmit(){
  //      if(!this.loginForm.valid){
  //        return;
  //      }
  //      console.log(this.user);
  //      //console.log(this.loginForm.value);
  //      this._userloginservice.loginUser(this.user).subscribe(data=>{
  //       alert("Login Successfully");
  //      },error=>alert("sorry..please enter correct credentials"));
  //      //this.router.navigate(['/login'])
     
  //     }

      onSubmit(){
        console.log(this.loginForm.value);
            this._userloginservice.loginUser(this.loginForm.value).subscribe(data=>{
          console.log(data);      
          console.log("working")
          alert("Login Successful")
           this.router.navigateByUrl('/registration');
        },error=>alert("sorry..please enter correct credentials"));        
      }

      // onSubmit(){
      //   if(!this.loginForm.valid){
      //     return;
      //   }
      //   console.log(this.loginForm.value);
      //   this._userloginservice.loginUser(this.loginForm.value).subscribe(data=>{
      //     console.log(data);
      //   },error=>alert("sorry..please enter correct credentials"));
      //   localStorage.setItem('user',this.loginForm.value)
      //   this.router.navigate(['/regsitration'])
      // }
}
