import { Component, EventEmitter, OnInit, Output, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  isLoggedIn: boolean = false;
  nomUtilisateur: string = ''; // Variable pour stocker le nom de l'utilisateur
  isSlidenavOpen = false;
  menuVariable:boolean=false;
  menu_icon_variable:boolean=false;

  @ViewChild('showLoginButton', { static: true }) showLoginButton!: TemplateRef<any>;

  constructor(private authService: AuthService, private router: Router) { }
 

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;

      if (this.isLoggedIn) {
        // Si l'utilisateur est connecté, récupérer son nom depuis le service d'authentification
        this.authService.getUserName().subscribe((nom: string) => {
          this.nomUtilisateur = nom;
        });
      }
    });
  }

  onCategoryChange(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;
  }
  Search() {
    console.log('Recherche pour:', this.searchTerm);
  }

  deconnexion() {
    // Appeler la méthode de déconnexion dans le service AuthService
    this.authService.logout();
    this.router.navigate(['/']); // Rediriger vers la page de connexion après la déconnexion
  }

  goToParametresCompte() {
    // Rediriger vers le composant "connexion" pour afficher les paramètres du compte
    this.router.navigate(['/dashboardConsommateur']);
  }
  openMenu(){
    this.menuVariable =! this.menuVariable;
    this. menu_icon_variable =! this.menu_icon_variable;
  }
}
