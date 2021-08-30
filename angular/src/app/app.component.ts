import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    { text: 'learn AngularJS', done: true },
    { text: 'build an AngularJS app', done: false }
  ]

  remaining() {
    var count = 0
    for (const todo of this.todos) {
      count += todo.done ? 0 : 1
    }
    return count
  }
}
