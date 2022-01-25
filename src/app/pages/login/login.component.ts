import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
   form = new FormGroup({
    user: new FormControl("",[Validators.required]),
    pass: new FormControl("",[Validators.required])
  })
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  sendForm(){
    if(this.form.controls["user"].value != "" && this.form.controls["pass"].value != "" ){
      this.router.navigate(["principal"])

    }

  }

}
