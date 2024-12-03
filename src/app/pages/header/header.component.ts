import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngleDown,
  faBars,
  faBoxOpen,
  faBriefcase,
  faBuildingCircleArrowRight,
  faGears,
  faHouseMedicalCircleExclamation,
  faPaste,
  faPeopleGroup,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    SignUpComponent,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  hamBurgerMenu = faBars;
  service = faGears;
  product = faBoxOpen;
  dealer = faBuildingCircleArrowRight;
  course = faPaste;
  about = faPeopleGroup;
  closeMenu = faTimes;
  career = faBriefcase;
  angleDown = faAngleDown;

  isMenuOpen = false;
  isSignUpVisible = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isMenuOpen = false;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  openSignUpPopup() {
    this.isSignUpVisible = true;
  }
  closeSignUpPopup(): void {
    this.isSignUpVisible = false;
  }
}
