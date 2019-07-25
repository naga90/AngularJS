import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {

  	constructor(private http: HttpClient) { 

  	}

  	getImages(page){
  		var imageUrl = environment.imageUrl;
  		var imageLimit = environment.imageLimit;

  		var url = imageUrl+'?page='+page+'&limit='+imageLimit;
  		return this.http.get(url);
  	}
}
