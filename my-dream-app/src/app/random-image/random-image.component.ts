import { Component, OnInit } from '@angular/core';
import { RandomImageService } from '.././random-image.service';

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
    imageList;
    randomImage;
  	constructor(randomImage : RandomImageService, private meta: Meta, private title: Title) {
  		  this.randomImage = randomImage;
  	}

	  ngOnInit() {
		    this.changePage();
        this.title.setTitle("Random Images from PicSum - Dream Project");
	  }

    goPrevious(){
      this.page = this.page-1;
      this.changePage();
    }

    goNext(){
      this.page = this.page+1;
      this.changePage();
    }

    changePage(){
      this.showProgress = true;
      this.randomImage.getImages(this.page).subscribe( (resp) => { 
          this.imageList = resp;
          this.showProgress = false;        
      });
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
}
