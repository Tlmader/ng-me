import { Component, OnInit } from '@angular/core';
import { Content } from '../shared/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  intros: string[];
  abouts: Content[];

  constructor() {
  }

  ngOnInit() {
    this.intros = [
      'I guess you\'re here because you want to know more about me, right? I\'m not that great at talking about myself, but I\'ll do my best and add some pictures.'
    ];
    this.abouts = [
      {
        title: null,
        description: 'I studied computer science at the University of New Orleans and develop software for GE Digital. My experience comes from Java programming and Agile software projects. My favorite language is JavaScript, and I have spent time building web applications with technologies like Angular, React, and Express.',
        image: 'assets/home/programming.png',
        links: [{
          label: 'GitHub',
          to: 'https://github.com/tlmader'
        },
        {
          label: 'LinkedIn',
          to: 'https://www.linkedin.com/in/tlmader/'
        }]
      },
      {
        title: null,
        description: 'I took game development courses and learned how to build small games with Unity, including a 3D action game with my game development class! I also had the opportunity to work on a project involving integrating virtual reality with a training simulation.',
        image: 'assets/home/game-dev.png',
        links: [{
          label: 'Game Projects',
          to: 'projects'
        }, {
          label: 'Play Theodoric in Browser!',
          to: 'projects/theodoric'
        }, {
          label: 'Campus News Article: UNO Game Dev',
          to: 'http://www.uno.edu/campus-news/2016/Game-On-UNO-Video-Game-Development-Concentration-Simulates-Real-World-Experience.aspx'
        }
        ]
      },
      {
        title: null,
        description: 'I still love playing video games. My favorite titles include Terraria, Undertale, Transistor, and Dark Souls.',
        image: 'assets/home/terraria.jpg',
        links: [{
          label: 'Visit me on Steam!',
          to: 'http://steamcommunity.com/id/tlmader'
        }]
      }
    ];
  }
}

