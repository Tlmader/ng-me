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
        title: 'chill-2017',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/319604460&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
      },
      {
        title: 'electronic-2017',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/319604320&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
      },
      {
        title: 'house-2017',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/319604122&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
      },
      {
        title: 'lowfi-2017',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/322558490&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
      },
      {
        title: 'trap-2017',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/319604149&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
      },
      {
        title: 'my-2017',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297172538&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
      },
      {
        title: 'my-2016',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/288248586&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
      },
      {
        title: 'Sets & Mixes',
        url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/116495333&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
      },
      {
        title: 'My 2016 (Spotify)',
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
