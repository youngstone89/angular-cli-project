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

    const loadPromise = this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');
    loadPromise.then(script => alert(`${script.src} is loaded!`),
      error => alert(`Error: ${error.message}`));
    loadPromise.then(script => alert('One More handler to do something else'));


    const executor = resolve => resolve("done");
    const testPromise = new Promise(executor);
    testPromise.then(alert);

    alert("code finished");


    //state: pending, result: undefined
    let promise = new Promise(function(resolve, reject){
      // the function is executed when the promise is constructed
      // state: fulfilled, result: done
      // setTimeout(() => resolve("done!"),1000);
      // state: rejected, result: error
      // setTimeout(() => reject(new Error("Whoops")),1000);
      resolve(123);
    });
    promise.then(result => this.printOutToConsole(result), error => this.printOutToConsole(error)
   ).catch(() => {
      console.log('error caught');
    })
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

  private printOutToConsole(message: any): void {
    console.log('[printOutToConsole]', message);
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

  loadScript(src: string): Promise<any> {
    return new Promise(function(resolve, reject) {
      const body = <HTMLDivElement> document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error("Script Load Error:" + src));
    });
  }
}

