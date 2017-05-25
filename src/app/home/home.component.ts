import { Component, OnInit } from '@angular/core';
import { About } from './about';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  intros: string[];
  abouts: About[];

  constructor() {
  }

  ngOnInit() {
    this.intros = [
      'My name is Ted Mader, and I am a full-time software engineer starting my career in New Orleans.',
      'I guess you\'re here because you want to know more about me, right? I\'m not that great at talking about myself, but I\'ll do my best and add some pictures.'
    ];
    this.abouts = [
      {
        title: 'Programming',
        content: 'I studied computer science at the University of New Orleans and develop software for GE Digital. My ' +
        'experience comes from Java programming and Agile software projects. I also enjoy web development and ' +
        'recently began studying AI programming.',
        photo: null,
        link: {
          label: 'Visit my GitHub profile!',
          to: 'https://github.com/tlmader'
        }
      },
      {
        title: 'Video Games',
        content: 'I am an avid gamer who also enjoys developing for video games. I have built small games with Unity ' +
        'and Unreal Engine, including a 3D action game with my game development class at UNO! My ' +
        'favorite video games include Guild Wars, Undertale, Dark Souls, and Minecraft.',
        photo: null,
        link: {
          label: 'Visit me on Steam!',
          to: 'http://steamcommunity.com/id/tlmader'
        }
      }
    ];
  }
}

