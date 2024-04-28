import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../context/DTOs';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service: LoginService, 
    private toastr : ToastrService,
    private router : Router,
    private spinner: NgxSpinnerService) { }
  loginForm! : FormGroup;

  ngOnInit(): void {

    this.createForm();
  }

  createForm(){

    this.loginForm = this.fb.group({
      email : ['',[Validators.required , Validators.email]],
      password :  ['',[Validators.required ,Validators.minLength(3) , Validators.maxLength(20)]],
    })

  }

  login(){
    this.spinner.show();
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;
      const newUser = new Login(email, password, 'admin');
      this.service.login(newUser).subscribe((res:any)=>{

        localStorage.setItem("token",res.token)
        this.toastr.success("Success","Login Success");
        this.router.navigate(['/tasks'])
        this.spinner.hide();
      },error=>{
        this.spinner.hide();
      })
    }
  
  }


}
