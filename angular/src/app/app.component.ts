import { Component } from '@angular/core';

@Component({
  template: `
  <input #box (keyup)="0">
  {{box.value}}`
})
export class AppComponent {
}
