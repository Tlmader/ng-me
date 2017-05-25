import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  playlists: Playlist[];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.playlists = [
      {
        title: 'My 2017 – SoundCloud',
        player: '<iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297172538&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
      },
      {
        title: 'My 2016 – SoundCloud',
        player: '<iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/288248586&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
      },
      {
        title: 'Sets & Mixes – SoundCloud',
        player: '<iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/116495333&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
      },
      {
        title: 'My 2016 – Spotify',
        player: '<iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Atlmader%3Aplaylist%3A3QGFzhkCFDhZhisEDYQvPW" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>',
      },
    ];
  }

  public safe(html) : SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

class Playlist {
  title: string;
  player: string;
}
