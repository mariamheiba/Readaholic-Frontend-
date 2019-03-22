import { Component, OnInit } from '@angular/core';
import {  NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { user } from '../classes/user';
import { user_shelves } from '../classes/user_shelves';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  form:FormGroup;
  users:user[];
  wrongPass:boolean;

  constructor(private service:HttpService,private fb:FormBuilder,private router:Router) { 
    this.form=this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
    });

    
    
  }
  
  ngOnInit() {
    if(localStorage.getItem('token')!=null)
    this.router.navigateByUrl('/home');
  }
onSubmit(){
  const val = this.form.value;
  this.service.login(val.email,val.password).subscribe(
(data:any) => {
  localStorage.setItem('token',data.token);
  this.users=data;
  this.router.navigateByUrl('/home');
  this.wrongPass=false;
},
err => {
  if(err.status ==400)
  {
  console.log('incorrect username or password');
  this.wrongPass=true;
  
  }
  else
  console.log(err);
}
  );
}
ngOnChanges(): void{
  this.wrongPass=this.wrongPass;
}

getUser():user[]{
  return this.users;
}
  

}