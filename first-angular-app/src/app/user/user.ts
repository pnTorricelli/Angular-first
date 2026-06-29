import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


// helper per rendere casuale l'utente selezionato tra quelli presenti
const randomActiveUser = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = DUMMY_USERS[randomActiveUser];

  get imagePath(): string {
    return 'users/' + this.selectedUser.avatar;
  }

  onSelectUser(): void {
    const randomActiveUser = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomActiveUser];
    console.log("Clicked");
  }
}
