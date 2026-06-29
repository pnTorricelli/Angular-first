import { Component, signal, computed } from '@angular/core';
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
  // LE parti commentate sono il vecchio modo di angular di gestire propietà e metodi .
  //  selectedUser = DUMMY_USERS[randomActiveUser];

  // get imagePath(): string {
  //   return 'users/' + this.selectedUser.avatar;
  // }

  // onSelectUser(): void {
  //   const randomActiveUser = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomActiveUser];
  //   console.log("Clicked");
  // }


  // metodo moderno di angular per gestire propietà e metodi.
  // Signal è un costrutto che permette di creare una propietà reattiva.
  selectedUser = signal(DUMMY_USERS[randomActiveUser])

  imagePath = computed((): string => 'users/' + this.selectedUser().avatar);

  onSelectUser(): void {
    const randomActiveUser = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomActiveUser]);
  }
}
