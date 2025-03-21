import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-three-d',
  standalone: true,
  imports: [CommonModule,MatExpansionModule],
  templateUrl: './three-d.component.html',
  styleUrl: './three-d.component.css'
})
export class ThreeDComponent {

  readonly panelOpenState = signal(false);

}
