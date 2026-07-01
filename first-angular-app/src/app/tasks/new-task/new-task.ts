import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { NewTaskInterface } from './new-task.model';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  userId = input<string>();

  close = output<void>();

  addTask = output<NewTaskInterface>()

  enteredTitle = signal<string>("");

  enteredSummary = signal<string>("");

  enteredDate = signal<string>("");

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    })
  }

}
