import { Component, OnInit } from '@angular/core';
import { RandomImageService } from '.././random-image.service';
import { environment } from './../../environments/environment';

import {Meta, Title} from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.less']
})
export class RandomImageComponent implements OnInit {

    showProgress = true;
    page = 1;	
    limit = environment.imageLimit;
    imageList;
    randomImage;
  	constructor(randomImage : RandomImageService, private meta: Meta, private title: Title) {
  		  this.randomImage = randomImage;
  	}

	  ngOnInit() {
		    this.changePage();
        this.title.setTitle("Random Images from PicSum - Dream Project");
    }
    
    getImageThumbUrl(id){
      return environment.imageDownloadUrl+id+"/300/240";
    }

    getImageLargeUrl(id){
      return environment.imageDownloadUrl+id+"/700/700";
    }

    goPrevious(){
      this.page = this.page-1;
      if(this.page <= 0){
        this.page = 1;
      }
      this.changePage();  
    }

    goNext(){
      this.page = this.page+1;
      this.changePage();
    }

    changePage(){
      this.showProgress = true;
      this.randomImage.getImages(this.page,this.limit).subscribe( (resp) => { 
          this.imageList = resp;
          this.showProgress = false;        
      });
      this.scrollToTop();
    }

    applyFancy(){
      $(".fancy").fancybox({
        openEffect  : "fade",
        closeEffect : "fade",
        type : "image",
        prevEffect		: 'none',
        nextEffect		: 'none',
        loop : false,
        helpers		: {
          title	: { type : 'inside' },
          buttons	: {}
        }
      });
    }

    scrollToTop(){
      $('html, body').animate({
          scrollTop: $("app-header").offset().top
      }, 1);
    }
}
