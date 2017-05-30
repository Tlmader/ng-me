import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  playlists: Playlist[];
  selected: Playlist;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.playlists = [
      {
        title: 'My 2017 – SoundCloud',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297172538&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
      },
      {
        title: 'My 2016 – SoundCloud',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/288248586&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
      },
      {
        title: 'Sets & Mixes – SoundCloud',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/116495333&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
      },
      {
        title: 'My 2016 – Spotify',
        url: 'https://open.spotify.com/embed/user/tlmader/playlist/3QGFzhkCFDhZhisEDYQvPW',
      },
    ];
  }

  onClick(playlist) {
    this.selected = playlist;
  }

  playlistURL() : SafeHtml {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.selected.url);
  }
}

class Playlist {
  title: string;
  url: string;
}
