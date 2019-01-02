import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    console.log('[ngOnInit]');
    //   let message;
    //   this.http.request(`https://swapi.co/api/people/1`)
    //     .toPromise()
    //     .then(character =>{
    //       message = `${character.name} played in`;
    //       return this.makeRequest(character.films[0]);
    //     })
    //
    //   this.makeRequest('https://swapi.co/api/people/1')
    //     .then(character => {
    //       message = `${character.name} played in`;
    //       return this.makeRequest(character.films[0]);
    //     })
    //     .then(film => {
    //       message += ` ${film.title}.`;
    //       return message;
    //     })
    //     .then(message => console.log(message))
    //     .catch(error => console.error(error));
    // }
    //
    //
    // makeRequest(url) {
    //   return new Promise((resolve, reject) => {
    //     this.http.request(url, (error, response, body) => {
    //       if (error) {
    //         reject(error)
    //       }
    //       resolve(JSON.parse(body));
    //     });
    //   });
    // }
  }
}
