import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-solar-workshop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solar-workshop.component.html',
  styleUrl: './solar-workshop.component.css',
})
export class SolarWorkshopComponent {

  workshopModules = [
    {
      title: '1. Solar Photovoltaic (PV) Operation & OFF-Grid PV Plant',
      image: './assets/images/workshops/solar-pv/module1.png',
      points: [
        'Solar PV Cell to Module, Series/Parallel, String, Array.',
        'Installation Requirements.',
        'Plant Operation & Site safety.',
        'Single Line Diagram (SLD).',
        '9 W AC/DC Bulb/Fan to kW of PV Plant Field Installation.',
        'Load Estimation, Battery Back-up Hrs. Calculation w.r.t. Load.',
        'Wire (AC/DC) Sizing, Earthing, Lightning Arrestor (LA).',
        'Structure (Roof-mounted/Industrial Shed/Ground Mounted/Elevated).'
      ]
    },
    {
      title: '2. ON-Grid PV Plant',
      image: './assets/images/workshops/solar-pv/module2.png',
      points: [
        'ACDB/DCDB.',
        'Generation Meter, Net Meter.',
        'Complete Connection Through CSPDCL Grid.'
      ]
    },
    {
      title: '3. Hybrid PV Plant',
      image: './assets/images/workshops/solar-pv/module3.jpg',
      points: [
        'PV Plant with ON-Grid and Battery back-up with critical Load.',
        'Live 5kW plant Installation.'
      ]
    },
    {
      title: '4. Basics of Wind Energy and Hydrogen Energy',
      image: './assets/images/workshops/solar-pv/module4.png',
      points: [
        'Small Wind Energy System Installation.',
        'Basics of Hydrogen Energy Practical study.'
      ]
    },
    {
      title: '5. Software Simulation, Site Safety Training, Marketing & Solar PV Plant Visit',
      image: '',
      points: [
        'PV System Design.',
        'How to convince the People.',
        'Site Safety Training.',
        'Solar PV Plant Visit.'
      ]
    }
  ];
  
}
