import { Component, OnInit } from '@angular/core';
import { About } from './about';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  abouts: About[];

  constructor() {
  }

  ngOnInit() {
    this.abouts = [
      {
        title: 'Programming',
        content: 'I study computer science at the University of New Orleans and develop software for GE Digital. My ' +
        'experience comes from Java programming and Agile software projects. I also enjoy web development and ' +
        'recently began studying AI programming.',
        linkLabel: 'Visit my GitHub profile!',
        linkTo: 'https://github.com/tlmader'
      },
      {
        title: 'Video Games',
        content: 'I am an avid gamer who also enjoys developing for video games. I have built small games with Unity ' +
        'and Unreal Engine, including a 3D action game with my game development class at UNO! My ' +
        'favorite video games include Guild Wars, Undertale, Dark Souls, and Minecraft.',
        linkLabel: 'Visit me on Steam!',
        linkTo: 'http://steamcommunity.com/id/tlmader'
      }
    ];
  }
}

