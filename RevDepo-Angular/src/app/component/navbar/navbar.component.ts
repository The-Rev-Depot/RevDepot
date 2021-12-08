import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn = true;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  events: string[] = [];
  opened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.opened != this.opened;
    this.sidenav.toggle();
  }

}
