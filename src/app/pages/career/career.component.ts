import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
})
export class CareerComponent {

  fileName: string | null = null;

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input?.files && input.files.length > 0) { 
    this.fileName = input.files[0].name;
  } else {
    this.fileName = null;
  }
}

onSubmit(event: Event): void {
  event.preventDefault(); 

}

  
}
