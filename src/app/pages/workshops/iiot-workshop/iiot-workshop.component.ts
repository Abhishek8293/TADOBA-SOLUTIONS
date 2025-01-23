import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-iiot-workshop',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './iiot-workshop.component.html',
  styleUrl: './iiot-workshop.component.css',
})
export class IiotWorkshopComponent {
  readonly panelOpenState = signal(false);
}
