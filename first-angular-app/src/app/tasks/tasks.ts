import { Component, input, computed, signal } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import type { TaskInterface } from "./task/task.model";
@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  id = input<string>();
  tasks = signal<TaskInterface[]>([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);
  nameUser = computed(() => DUMMY_USERS.find(user => user.id === this.id())?.name);

  tasksUser = computed(() => this.tasks().filter(task => task.userId === this.id()));
  isAddingTask = signal<boolean>(false);
  onStartAddTask(): void {
    console.log("Add Task", this.id());
    this.isAddingTask.set(true);
  }
  onCompletedTask(id: string): void {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }
}
