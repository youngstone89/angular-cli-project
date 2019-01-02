import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RxSubjectComponent } from './rx-subject/rx-subject.component';


@NgModule({
  declarations: [
    AppComponent,
    RxSubjectComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
