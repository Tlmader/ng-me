import { Component, OnInit } from '@angular/core';

import { Link } from '../shared/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navLinks: Link[];

  constructor() {
  }

  ngOnInit() {
    this.navLinks = [
      {
        label: 'Home',
        to: 'home'
      },
      {
        label: 'Projects',
        to: 'projects'
      },
      {
        label: 'Photos',
        to: 'photos'
      },
      {
        label: 'Music',
        to: 'music'
      }
    ];
  }
}
