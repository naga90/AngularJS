import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { 

  }

  getVideos(searchTerm){
    var api = environment.youTubeAPI;
    var url = environment.youTubeAPIURL+'search?part=id,snippet&q='+searchTerm+'&type=video&key='+api;
    return this.http.get(url);
  }
}
