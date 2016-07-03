System.register(['angular2/core', './artist-item.component', './artist-details.component', './search-pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, artist_item_component_1, artist_details_component_1, search_pipe_1;
    var AppComponent, ARTISTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_item_component_1_1) {
                artist_item_component_1 = artist_item_component_1_1;
            },
            function (artist_details_component_1_1) {
                artist_details_component_1 = artist_details_component_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.artists = ARTISTS;
                }
                AppComponent.prototype.addArtist = function (myArtist) {
                    this.artists.push(myArtist);
                };
                AppComponent.prototype.showArtist = function (item) {
                    this.currentArtist = item;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'templates/app.html',
                        styleUrls: ['css/app.css'],
                        directives: [artist_item_component_1.ArtistItemComponent, artist_details_component_1.ArtistDetailsComponent],
                        pipes: [search_pipe_1.SearchPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            ARTISTS = [
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
            ];
        }
    }
});

//# sourceMappingURL=app.component.js.map
