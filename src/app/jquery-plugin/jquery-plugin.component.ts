import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-jquery-plugin',
  templateUrl: './jquery-plugin.component.html',
  styleUrls: ['./jquery-plugin.component.css']
})
export class JqueryPluginComponent implements OnInit {

  title = 'Look jQuery Animation working in action!';

  constructor() { }

  ngOnInit() {

      $(document).ready(function () {
        $('button').click(function() {
          console.log('button clicked')
          const div = $('div#jquery-div');
          console.log('div', div);
          div.animate({'left': '100px'}, 'slow');
          div.animate({'font-size': '5em'}, 'slow');
        });
      });


  }

}
