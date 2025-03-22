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
        'A hands-on EV workshop covering vehicle technology, battery management, motor systems, inverters, vehicle dynamics, simulation with MATLAB, and fault diagnosis using OBD scanners.',
      link: '/ev-workshop',
    },
    {
      title: 'Advanced IIoT Workshop with Embedded Systems',
      description:
        'An advanced IoT workshop covering system architecture, embedded design, LoRa & GSM/GPRS communication, edge computing, and hands-on project development in smart agriculture, cities, and traffic management.',
      link: '/iiot-workshop',
    },
    {
      title: 'Solar PV Plant Workshop',
      description:
        'A hands-on workshop covering Solar PV systems, including OFF-Grid, ON-Grid, and Hybrid plants, along with wind and hydrogen energy basics, software simulation, site safety, and a solar plant visit.',
      link: '/solar-pv-plant-workshop',
    },
    {
      title: 'Hands-on Training On 3D Desiging and Fabrication',
      description: 'A practical workshop on 3D design, modeling, and printing, covering essential tools, techniques, and real-world applications.',
      link: '/3d-workshop',
    },
  ];
}
