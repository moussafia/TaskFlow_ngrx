import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidBarComponent } from './sid-bar/sid-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    SidBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavBarComponent,
    SidBarComponent
  ]
})
export class SharedModuleModule { }
