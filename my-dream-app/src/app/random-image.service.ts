import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {

  	constructor(private http: HttpClient) { 

  	}

  	getImages(page,limit){
  		var imageUrl = environment.imageUrl;

  		var url = imageUrl+'?page='+page+'&limit='+limit;
  		return this.http.get(url);
  	}
}