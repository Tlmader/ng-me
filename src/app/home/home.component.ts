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
      'My name is Ted Mader, and I am a full-time software engineer starting my career in the incredible city of New Orleans.',
      'I guess you\'re here because you want to know more about me, right? I\'m not that great at talking about myself, but I\'ll do my best and add some pictures.'
    ];
    this.abouts = [
      {
        title: null,
        description: 'I studied computer science at the University of New Orleans and develop software for GE Digital. My experience comes from Java programming and Agile software projects. I have spent time developing web applications using technologies like Spring, Angular, and Node. I also enjoy web development and recently began studying AI programming.',
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
        description: 'Of course, I still love playing video games. I enjoy building and exploring with friends in Terraria and Minecraft, the planning involved in a game of Sid Meier\'s Civilization, and slaying powerful bosses in Dark Souls. Stardew Valley has been a lot of fun recently. I am also a huge fan of stories told by indie titles like Undertale, Bastion, and Transistor.',
        image: 'assets/home/terraria.jpg',
        links: [{
          label: 'Visit me on Steam!',
          to: 'http://steamcommunity.com/id/tlmader'
        }]
      }
    ];
  }
}

