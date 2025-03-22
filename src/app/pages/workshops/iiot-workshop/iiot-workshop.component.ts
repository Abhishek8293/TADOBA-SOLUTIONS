import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-iiot-workshop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iiot-workshop.component.html',
  styleUrl: './iiot-workshop.component.css',
})
export class IiotWorkshopComponent {

  workshopModules = [
    {
      title: '1. Advanced IoT Concepts & Architecture',
      image: './assets/images/workshops/iiot/module1.png',
      points: [
        'In-depth study of IoT architecture and system design.',
        'System design and integration.'
      ]
    },
    {
      title: '2. Embedded System Design & Integration',
      image: './assets/images/workshops/iiot/module2.jpg',
      points: [
        'Advanced microcontroller boards.',
        'Hands-on: Developing complex IoT devices.'
      ]
    },
    {
      title: '3. LoRa & GSM/GPRS Technology',
      image: './assets/images/workshops/iiot/module3.png',
      points: [
        'Network setup and gateway configuration.',
        'Security and application integration.'
      ]
    },
    {
      title: '4. Edge Computing & Data Processing',
      image: './assets/images/workshops/iiot/module4.png',
      points: [
        'Real-time data processing.',
        'Integration with cloud platforms.',
        'Project Showcase: Presentation and Demonstration of Advanced Projects.'
      ]
    },
    {
      title: '5. Practical Project Development',
      image: './assets/images/workshops/iiot/module5.jpg',
      points: [
        'IoT-enabled smart solutions.',
        'Robotics integration.',
        'Closing Ceremony: Distribution of Certificates and Feedback Session.'
      ]
    },
    {
      title: '6. Advanced Hands-on Projects',
      image: '',
      points: [
        'Smart Agriculture System: Precision agriculture using LoRa and GSM/GPRS.',
        'Smart City Infrastructure: Smart street lighting and waste management.',
        'Smart Traffic Management: Real-time traffic data using edge computing.'
      ]
    }
  ];
  
}
