import { Component, OnInit } from '@angular/core';

import { NavLink } from './navlink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navLinks: NavLink[];

  constructor() {
  }

  ngOnInit() {
    this.navLinks = [
      {
        label: 'Home',
        route: 'home'
      },
      {
        label: 'Projects',
        route: 'projects'
      },
      {
        label: 'Photos',
        route: 'photos'
      },
      {
        label: 'Music',
        route: 'music'
      }
    ]
  }
}
