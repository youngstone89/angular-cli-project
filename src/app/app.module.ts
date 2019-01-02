import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RxSubjectComponent } from './rx-subject/rx-subject.component';
import { RxPromiseComponent } from './rx-promise/rx-promise.component';
import {HttpClientModule} from '@angular/common/http';
import { AsyncAwaitComponent } from './async-await/async-await.component';


@NgModule({
  declarations: [
    AppComponent,
    RxSubjectComponent,
    RxPromiseComponent,
    AsyncAwaitComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
