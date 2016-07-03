import {Component} from 'angular2/core';
import {Artist} from './artist';

@Component ({
  selector: 'artist-details',
  templateUrl: 'templates/artistdetails.html',
  inputs: ['artist']
})

export class ArtistDetailsComponent {

}
