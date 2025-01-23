import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-ev-workshop',
  standalone: true,
  imports: [CommonModule,MatExpansionModule],
  templateUrl: './ev-workshop.component.html',
  styleUrls: ['./ev-workshop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvWorkshopComponent {

  readonly panelOpenState = signal(false);

  
}
