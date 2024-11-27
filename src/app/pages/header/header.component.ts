import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBoxOpen, faBriefcase, faBuildingCircleArrowRight, faGears, faHouseMedicalCircleExclamation, faPaste, faPeopleGroup, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,MatButtonModule,CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hamBurgerMenu = faBars
  service=faGears
  product=faBoxOpen
  dealer=faBuildingCircleArrowRight
  course=faPaste
  about=faPeopleGroup
  closeMenu = faTimes
  career=faBriefcase
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
