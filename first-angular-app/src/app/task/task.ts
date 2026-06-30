import { Component, input, computed } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  id = input<string>();

  nameUser = computed(() => DUMMY_USERS.find(user => user.id === this.id())?.name);

}
