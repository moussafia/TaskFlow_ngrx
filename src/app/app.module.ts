import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { RouterModule } from '@angular/router';
import { TaskModule } from './task/task.module';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ 
      name:"taskFlow debug",
      maxAge: 25, 
      logOnly: environment.production 
    }),
    SharedModuleModule,
    TaskModule,
    RouterModule.forRoot([
      {path: "task/task_list", component: TaskListComponent},
      {path: "task/add", component: TaskCreateComponent}
    ]),
    AuthModule,
    SweetAlert2Module    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
