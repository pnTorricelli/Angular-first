import { Component, input, output } from '@angular/core';
import type { TaskInterface } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskInterface>();
  completed = output<string>();

  onCompleteTask(): void {
    this.completed.emit(this.task().id);
  }
}
