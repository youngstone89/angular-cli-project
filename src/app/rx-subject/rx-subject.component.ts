import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Rx from "rxjs";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-rx-subject',
  templateUrl: './rx-subject.component.html',
  styleUrls: ['./rx-subject.component.css']
})
export class RxSubjectComponent implements OnInit, OnDestroy {

  private _subject: Rx.Subject<any>;
  private _behaviorSubject: Rx.BehaviorSubject<any>;
  private _observable: Rx.Observable<any>;
  private _replaySubject: Rx.ReplaySubject<any>;
  private _asyncSubject: Rx.AsyncSubject<any>;
  constructor() { }

  ngOnInit() {

    // this.initObservable();
    // this.initSubject();
    // this.initBehaviorSubject();
    // this.subscribeSubject();
    // this.initReplaySubject();
    this.initAsyncSubject();

    for (let i = 0; i < 3; i++) {
        // this._subject.next(Math.random());
        // this._behaviorSubject.next(Math.random());
        // this._replaySubject.next(Math.random());
      this._asyncSubject.next(Math.random());
    }

    // this._replaySubject.subscribe((data) => {
    //   console.log('Subscriber B:', data);
    // });
    console.log('AyncSubject Completed')
    this._asyncSubject.complete();

  }

  ngOnDestroy() {
    this._subject.unsubscribe();
    this._behaviorSubject.unsubscribe();
  }

  initObservable() {
    this._observable = Rx.Observable.create((observer) => {
      observer.next(Math.random());
    })
    ;
  }
  initSubject() {
    this._subject = new Rx.Subject();
    this._subject.subscribe((data) =>{
      console.log('_subject Subscriber A:', data);
    });
    this._subject.subscribe((data) =>{
      console.log('_subject Subscriber B:', data);
    });
  }
  initBehaviorSubject(){
    this._behaviorSubject = new Rx.BehaviorSubject(Math.random());
    this._behaviorSubject.subscribe((data) =>{
      console.log('_behaviorSubject Subscriber A:', data);
    });

    this._behaviorSubject.subscribe((data) =>{
      console.log('_behaviorSubject Subscriber B:', data);
    });
  }

  initReplaySubject() {
    this._replaySubject = new Rx.ReplaySubject(2);
    this._replaySubject.subscribe((data) => {
      console.log('_replaySubject Subscriber A:',data);
    } );
  }
  initAsyncSubject() {
    this._asyncSubject = new Rx.AsyncSubject();
    this._asyncSubject.subscribe((data) => {
      console.log('_replaySubject Subscriber A:',data);
    } );
  }


  get subject(): Subject<any> {
    return this._subject;
  }

  set subject(value: Subject<any>) {
    this._subject = value;
  }
  get behaviorSubject(): BehaviorSubject<any> {
    return this._behaviorSubject;
  }

  set behaviorSubject(value: BehaviorSubject<any>) {
    this._behaviorSubject = value;
  }


  private subscribeSubject() {

    this._observable.subscribe(this._subject);
  }
}
