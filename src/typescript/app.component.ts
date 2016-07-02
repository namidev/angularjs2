import {Component} from 'angular2/core';

@Component ({
  selector: 'my-app',
  templateUrl: 'templates/app.html'
})

export class AppComponent {
  name = 'Anil'
  artists = ['Sonu Nigam', 'Pankaj Udaas'];
  
  myClick(myName, artistContainer) {
    this.name = myName;
    artistContainer.style.backgroundColor = 'red';
  }
  
  addArtist(myArtist) {
    this.artists.push(myArtist);
  }
}