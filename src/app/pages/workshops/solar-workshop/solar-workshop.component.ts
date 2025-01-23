import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-solar-workshop',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './solar-workshop.component.html',
  styleUrl: './solar-workshop.component.css',
})
export class SolarWorkshopComponent {
  readonly panelOpenState = signal(false);
}
