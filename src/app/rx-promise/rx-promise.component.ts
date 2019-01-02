import { Component, OnInit } from '@angular/core';
import * as Rx from "rxjs";
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-rx-promise',
  templateUrl: './rx-promise.component.html',
  styleUrls: ['./rx-promise.component.css']
})
export class RxPromiseComponent implements OnInit {
  public results = [];
  public term = new FormControl();
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

    this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(searchTerm =>{
        this.http.get(`https://swapi.co/api/people/?search=${searchTerm}`).subscribe((data: any) => {
          /* tslint:disable:no-console */
          console.time('request-length');
          console.log(data);
          console.timeEnd('request-length');
          this.results = data.results;
        });
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

