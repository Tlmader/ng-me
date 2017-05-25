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
        image: null,
        links: [{
          label: 'Visit my GitHub profile!',
          to: 'https://github.com/tlmader'
        }]
      },
      {
        title: null,
        description: 'I took game development courses and learned how to build small games with Unity, including a 3D action game with my game development class! I also had the opportunity to work on a project involving integrating virtual reality with a training simulation.',
        image: null,
        links: null
      },
      {
        title: null,
        description: 'Of course, I still love playing video games. I enjoy building and exploring with friends in Terraria and Minecraft, the planning involved in a game of Sid Meier\'s Civilization, and slaying powerful bosses in Dark Souls. Stardew Valley has been a lot of fun recently. I am also a huge fan of stories told by indie titles like Undertale, Bastion, and Transistor.',
        image: null,
        links: [{
          label: 'Visit me on Steam!',
          to: 'http://steamcommunity.com/id/tlmader'
        }]
      }
    ];
  }
}

