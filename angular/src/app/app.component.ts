import { Component } from '@angular/core';

@Component({
  selector: 'echo',
  template: `
  <input #box (keyup)="0">
  {{box.value}}`
})
export class AppComponent {
}
