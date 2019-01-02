import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{
  title = 'app';
  public currentComponent: string;

  constructor(){

  }
  ngOnInit():void {
    this.currentComponent = '';
  }

  ngOnChanges(changes: SimpleChanges):void {

    console.log('[ngOnChanges]',changes);
  }


  changeComponent(comp, $event) {
    console.log('[changeComponent]', comp);
    this.currentComponent = comp;
  }
}
