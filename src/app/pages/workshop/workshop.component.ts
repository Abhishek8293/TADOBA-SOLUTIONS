import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css',
})
export class WorkshopComponent {
  workshops = [
    {
      title: 'Electric Vehicles (EVs) Workshop',
      description:
        'Gain insights into EV technology, design, and sustainability.',
      link: '/ev-workshop',
    },
    {
      title: 'Advanced IIoT Workshop',
      description:
        'Learn IoT architecture, embedded systems, and smart city applications.',
      link: '/iiot-workshop',
    },
    {
      title: 'Solar PV Plant Workshop',
      description:
        'Hands-on training in solar photovoltaic systems and hybrid installations.',
      link: '/solar-pv-plant-workshop',
    },
    {
      title: '3D Designing & Fabrication',
      description: 'Practical training in 3D modeling, CAD, and 3D printing.',
      link: '/3d-workshop',
    },
  ];
}
