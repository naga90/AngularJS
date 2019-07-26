import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.less']
})
export class VideoDetailComponent implements OnInit {

  @Input() selected_video:any;
  sanitizer;
  constructor(sanitizer:DomSanitizer) { 
    this.sanitizer = sanitizer;   
  }


  ngOnInit() {

  }

  getVideoUrl(){
    var video_id = this.selected_video.id.videoId;
    var url = 'https://www.youtube.com/embed/'+video_id+'?autoplay=1';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getTitle(){
    return this.selected_video.snippet.title;
  }

  getDesc(){
    return this.selected_video.snippet.description;
  }

}
