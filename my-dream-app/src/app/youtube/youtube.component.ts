import { Component, OnInit, Input } from '@angular/core';

import { YoutubeService } from './../youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.less']
})
export class YoutubeComponent implements OnInit {

    videos = [];
    youtube;
    search_keyword = '';
    selected_video;
   
    constructor(youtube:YoutubeService) {
      this.youtube = youtube;
    }

    ngOnInit() {
      this.search_keyword = "Animated short films";
      this.searchVideo();
    }

    searchVideo(){
      var searchTerm = this.search_keyword;
      this.youtube.getVideos(searchTerm).subscribe( (resp) => { 
        this.videos = resp.items;
        this.selected_video = this.videos[0]; 
      });
      
    }

    selectVideo(video){
      this.selected_video = video;
    }

}
