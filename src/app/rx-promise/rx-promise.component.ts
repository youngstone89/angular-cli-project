import { Component, OnInit } from '@angular/core';
import * as Rx from "rxjs";
import {toPromise} from 'rxjs/operator/toPromise';








@Component({
  selector: 'app-rx-promise',
  templateUrl: './rx-promise.component.html',
  styleUrls: ['./rx-promise.component.css']
})
export class RxPromiseComponent implements OnInit {

  constructor() {

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

}
