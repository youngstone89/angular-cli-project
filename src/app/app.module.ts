import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RxSubjectComponent } from './rx-subject/rx-subject.component';
import { RxPromiseComponent } from './rx-promise/rx-promise.component';


@NgModule({
  declarations: [
    AppComponent,
    RxSubjectComponent,
    RxPromiseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
