import { Component, input, output } from '@angular/core';
import type { TaskInterface } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
