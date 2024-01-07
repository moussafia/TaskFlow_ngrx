import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  open:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  openSidBar(){
    this.open = !this.open
  }

}
