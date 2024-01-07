import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './state/auth.reducer';
import { AuthEffect } from './state/auth.effect';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user',userReducer),
    EffectsModule.forFeature([AuthEffect]),
    HttpClientModule,
    SweetAlert2Module.forChild({})
  ],
  exports:[
    SignInComponent
  ]
})
export class AuthModule {}
