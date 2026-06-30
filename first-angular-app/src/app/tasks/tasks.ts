import { Component, input, computed } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';
@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  id = input<string>();

  nameUser = computed(() => DUMMY_USERS.find(user => user.id === this.id())?.name);
  tasksUser = computed(() => dummyTasks.filter(task => task.userId === this.id()));

}
