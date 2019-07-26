import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

  @Input() videos:any;
  @Output() selected_video: EventEmitter<number> = new EventEmitter();

  constructor() { 

  }

  ngOnInit() {

  }

  getThumbImage(video){
    return video.snippet.thumbnails.default.url;
  }

  getTitle(video){
    return video.snippet.title;
  }

  selectVideo(video){
    this.selected_video.emit(video);
  }

}
