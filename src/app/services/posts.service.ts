import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpService: HttpClient) { }

  /**
   * Get posts data service call
   * By: Karunakar,
   * Date: 24th June 2024
   * @returns 
   */
  getPosts(): Observable<any> {
    return this.httpService.get('https://jsonplaceholder.typicode.com/users');
  }
}
