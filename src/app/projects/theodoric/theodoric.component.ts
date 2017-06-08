import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theodoric',
  templateUrl: './theodoric.component.html',
  styleUrls: ['./theodoric.component.css']
})
export class TheodoricComponent implements OnInit {
  readmes: Readme[];

  constructor() { }

  ngOnInit() {
    this.readmes = [
      {
        header: 'Controls',
        items: [
          'WASD - Move',
          'Left Mouse Button - Hold down to attack',
          'Spacebar - Cast spell'
        ]
      },
      {
        header: 'Objectives',
        items: [
          'Gather gold',
          'Slay monsters',
          'Survive!'
        ]
      }
    ]
  }

}

class Readme {
  header: string;
  items: string[];
}
