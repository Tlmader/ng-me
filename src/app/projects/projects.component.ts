import { Component, OnInit } from '@angular/core';
import { Content } from '../shared/content';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Content[];

  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        title: 'Chess Bot',
        description: 'This project provides a model of the state space of chess and a simple chess-playing bot that ' +
        'explores that space efficiently and decides what moves to make to defeat other bots. This uses a chess ' +
        'framework and tests against bots by Stephen G. Ware.',
        image: null,
        links: [
          {
            label: 'Source',
            to: 'https://github.com/Tlmader/chess-bot'
          }
        ]
      },
      {
        title: 'Honest Abe',
        description: 'A group project by the UNO Advanced Game Development class of Spring 2016: a 2D beat \'em up built ' +
        'with Unity!',
        image: 'assets/projects/honest-abe.png',
        links: [
          {
            label: 'Windows desktop 64-bit',
            to: 'https://build.cloud.unity3d.com/share/ZkMWaNQDf-/'
          },
          {
            label: 'Mac desktop 64-bit',
            to: 'https://build.cloud.unity3d.com/share/ZkMWaNQDf-/'
          },
          {
            label: 'Campus News Article!',
            to: 'http://www.uno.edu/campus-news/2016/Game-On-UNO-Video-Game-Development-Concentration-Simulates-Real-World-Experience.aspx'
          },
          {
            label: 'Source',
            to: 'https://github.com/Tlmader/honest-abe'
          }
        ]
      },
      {
        title: 'Theodoric',
        description: 'A 2D top-down action RPG built with the Phaser HTML5 game framework.',
        image: 'assets/projects/theodoric.jpg',
        links: [
          {
            label: 'Play in browser!',
            to: 'http://tlmader.github.io/#/theodoric'
          },
          {
            label: 'Download',
            to: 'https://spaces.hightail.com/space/GGXk0'
          },
          {
            label: 'Source',
            to: 'https://github.com/Tlmader/theodoric'
          }
        ]
      },
      {
        title: 'Glyphic Heroes',
        description: 'A competitive match 3 game built with the Unity. Players must line up glyphs to attack opponents' +
        'and defend themselves.',
        image: null,
        links: [
          {
            label: 'Download',
            to: 'https://spaces.hightail.com/space/FIXaH'
          },
          {
            label: 'Source',
            to: 'https://github.com/Tlmader/glyphic-heroes'
          }
        ]
      },
      {
        title: 'Endless Runner',
        description: 'An endless runner game built with Unreal Engine 4.',
        image: null,
        links: [
          {
            label: 'Download',
            to: 'https://spaces.hightail.com/space/eaQmn'
          },
          {
            label: 'Source',
            to: 'https://github.com/Tlmader/endless-runner'
          }
        ]
      },
    ];
  }
}
