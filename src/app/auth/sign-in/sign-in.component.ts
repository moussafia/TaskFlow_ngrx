import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formSignIn?:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formSignIn = this.fb.group({
      email:['',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      password:['',[Validators.required, Validators.minLength(3)]]
    })
  }

}
