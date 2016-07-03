import {Component} from 'angular2/core';
import {Artist} from './artist';
import {ArtistItemComponent} from './artist-item.component';
import {ArtistDetailsComponent} from './artist-details.component';
import {SearchPipe} from './search-pipe';


@Component ({
  selector: 'my-app',
  templateUrl: 'templates/app.html',
  styleUrls: ['css/app.css'],
  directives: [ArtistItemComponent, ArtistDetailsComponent],
  pipes: [SearchPipe]
})

export class AppComponent {
  artists = ARTISTS;
  currentArtist: Artist;

  addArtist(myArtist) {
    this.artists.push(myArtist);
  }
  
  showArtist(item) {
    this.currentArtist = item;
  }
}

var ARTISTS: Artist[] = [
  {
    name: 'Sonu Nigam',
    shortname: 'Sonu',
    reknown: 'Nigam',
    bio: 'Romantic singer. One of best singers around'
  },
  {
    name: 'Pankaj udaas',
    shortname: 'udaas',
    reknown: 'Pankaj',
    bio: 'Ghazal singer. One of best ghazal singer around'
  }
]