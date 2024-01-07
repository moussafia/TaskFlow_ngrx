import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TaskCreateComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TaskListComponent,
    TaskCreateComponent
  ]
})
export class TaskModule { }
