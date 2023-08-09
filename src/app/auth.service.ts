import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userName: BehaviorSubject<string> = new BehaviorSubject<string>(''); // Variable pour stocker le nom de l'utilisateur

  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getUserName(): Observable<string> {
    return this.userName.asObservable();
  }

  // Méthode pour mettre à jour l'état de connexion lorsque l'utilisateur se connecte
  login() {
    this.loggedIn.next(true);
    // Remplace cette ligne par la logique pour récupérer le nom de l'utilisateur depuis ton backend ou n'importe quelle source appropriée
    this.userName.next('John Doe'); // Exemple de nom d'utilisateur, remplace-le par la valeur réelle
  }

  // Méthode pour mettre à jour l'état de connexion lorsque l'utilisateur se déconnecte
  logout() {
    this.loggedIn.next(false);
    this.userName.next(''); // Réinitialise le nom d'utilisateur lorsque l'utilisateur se déconnecte
  }
}
