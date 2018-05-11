import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//https://raw.githubusercontent.com/CsgeeksYoutube/ionic-music-app-data-file/master/New%20Text%20Document.json
const API:string ="https://raw.githubusercontent.com/CsgeeksYoutube/ionic-music-app-data-file/master/New%20Text%20Document.json";

@Injectable()
export class MusicProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicProvider Provider');
  }

getmusic(){
  return this.http.get<any[]>(API);
}

}
