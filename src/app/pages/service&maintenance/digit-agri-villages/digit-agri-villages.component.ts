import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-digit-agri-villages',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './digit-agri-villages.component.html',
  styleUrl: './digit-agri-villages.component.css'
})
export class DigitAgriVillagesComponent {

  @ViewChild('targetSection') targetSection!:ElementRef;

  scrollToProductSection(){
    this.targetSection.nativeElement.scrollIntoView({behavior:'smooth'});
  }

}
