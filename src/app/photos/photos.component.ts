import { Component, OnInit } from '@angular/core';

import { InstagramService } from './instagram.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  errorMessage: string;
  media: Object;

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.getMedia();
  }

  getMedia() {
    this.instagramService.getMedia()
      .subscribe(
        media => {
          this.media = media;
          console.log(media);
        },
        error => this.errorMessage = <any>error);
  }
}
