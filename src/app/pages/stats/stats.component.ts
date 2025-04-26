import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../services/api.service';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit {
  
  visitCount!:number;
   apiService = inject(ApiService);

   ngOnInit(): void {
    this.getVisitCount()
  }

  getVisitCount(){
    this.apiService.getVisitCount().subscribe({
      next: (responseData:ApiResponse<number>) =>{
        this.visitCount = responseData.data;
      },
      error: (error) => {
        console.error('Something Went Wrong', error);
      },
    })
  }

}
