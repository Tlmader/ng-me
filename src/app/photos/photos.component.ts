import { Component, OnInit } from '@angular/core';

import { InstagramService } from './instagram.service';
import { Photo } from './photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  errorMessage: string;
  photos: Photo[];

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.getMedia();
  }

  getMedia() {
    this.instagramService.getMedia()
      .subscribe(
        photos => {
          this.photos = photos;
        },
        error => this.errorMessage = <any>error);
  }
}
