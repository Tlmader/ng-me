import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
