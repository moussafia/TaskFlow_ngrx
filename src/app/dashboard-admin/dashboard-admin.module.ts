import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { TaskListComponent } from '../task/task-list/task-list.component';
import { TaskCreateComponent } from '../task/task-create/task-create.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'dashboard',component: DashboardComponent,
      children:[
        {path: "task/task_list", component: TaskListComponent},
        {path: "task/add", component: TaskCreateComponent}
      ]}
    ]),
    SharedModuleModule
  ]
})
export class DashboardAdminModule { }
