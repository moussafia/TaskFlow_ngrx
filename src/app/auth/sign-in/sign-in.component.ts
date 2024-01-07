import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthPageAction } from '../state/action';
import { getUserAuthFailure, getUserAuthSucces } from '../state';
import { Observable } from 'rxjs';
import { AuthFailure, AuthUser } from 'src/app/dto/auth';
import { AuthState } from '../state/auth.reducer';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formSignIn?:FormGroup;
  user$?: Observable<AuthUser>;
  errorMessage$?: Observable<AuthFailure>;


  constructor(private fb: FormBuilder, private store:Store<AuthState>) { }

  ngOnInit(): void {
    this.formSignIn = this.fb.group({
      email:['',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      password:['',[Validators.required, Validators.minLength(3)]]
    })
  }

  signIn() {
    if(this.formSignIn?.invalid)
    return;
    this.store.dispatch(AuthPageAction.logInUser(this.formSignIn?.value))
    this.user$ = this.store.select(getUserAuthSucces);
    this.errorMessage$ = this.store.select(getUserAuthFailure);
    this.errorMessage$.subscribe({
      next: error=>console.log('comp '+ error.error.message)
    });

   this.user$.subscribe({
    next: data=>console.log('component '+data.access_token)
   })
  }

}
