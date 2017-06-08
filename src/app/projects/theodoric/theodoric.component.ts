import { Component, OnInit } from '@angular/core';
import { Content } from '../../shared/content';

@Component({
  selector: 'app-theodoric',
  templateUrl: './theodoric.component.html',
  styleUrls: ['./theodoric.component.css']
})
export class TheodoricComponent implements OnInit {
  readmes: Content[];

  constructor() { }

  ngOnInit() { }

}
