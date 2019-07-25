import { Component, OnInit } from '@angular/core';

import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  	constructor(private meta: Meta, private title: Title) { 

  	}

  	ngOnInit() {
  		this.meta.addTags([
  					{ name: 'description', content: 'This is my angular learning project.' },
  					{ name: 'keywords', content: 'Angular, Learning' },
  				]);
  		this.title.setTitle("Home - Dream Project");

      //this.changeTitle(this.title);
  	}

    changeTitle(title){
      var timer = 0;
      setInterval(function(){
        timer += 1;
        title.setTitle("Home - Dream Project ("+timer+")");  
      },1000);
    }

}
