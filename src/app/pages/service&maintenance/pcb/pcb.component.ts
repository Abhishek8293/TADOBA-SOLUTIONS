import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pcb',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pcb.component.html',
  styleUrls: ['./pcb.component.css'],
})
export class PcbComponent {

}
