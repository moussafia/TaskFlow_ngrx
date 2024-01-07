import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    SignInComponent
  ]
})
export class AuthModule {}
