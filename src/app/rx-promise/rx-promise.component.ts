import { Component, OnInit } from '@angular/core';
import * as Rx from "rxjs";
import {HttpClient} from '@angular/common/http';








@Component({
  selector: 'app-rx-promise',
  templateUrl: './rx-promise.component.html',
  styleUrls: ['./rx-promise.component.css']
})
export class RxPromiseComponent implements OnInit {
  public results = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const sample = val => Rx.Observable.of(val).delay(5000);

    const example = sample('First Example')
    .toPromise().then(result => {
      console.log('[From Promise]', result);
      });

    const exampleTwo = () => {
      return Promise.all([
        sample('Promise 1').toPromise(),
        sample('Promise 2').toPromise()
      ]);
    };

    exampleTwo().then(val =>{
      console.log('Promise.all Result:', val);
    });
  }

  public search(term){
    console.log('[term]', term);
    this.http.get(`https://swapi.co/api/people/?search=${term}`)
      .toPromise()
      .then((data: any) => {
        console.time('request-length');
        console.log(data);
        console.timeEnd('request-length');
        this.results = data.results;
      });
  }

}

