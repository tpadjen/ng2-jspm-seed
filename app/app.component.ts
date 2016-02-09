import {Component} from 'angular2/core';

import {ExampleComponent} from './example/example.component';

@Component({
  selector: 'example-app',
  template: '<example-component></example-component>',
  directives: [ExampleComponent]
})
export class AppComponent {}
