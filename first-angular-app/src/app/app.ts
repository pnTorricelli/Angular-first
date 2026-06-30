import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { User } from './user/user';
import { Task } from './task/task';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;

  activeUserId = signal<string>(this.users[0].id);

  onSelectUser(Id: string): void {
    console.log("L'usente selezionato ha id: " + Id);
    this.activeUserId.set(Id);
  }
}
