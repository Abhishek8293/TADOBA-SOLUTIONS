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

  workshopData = [
    {
      title: 'Introduction to Electric Vehicles and Fundamentals',
      sessions: [
        {
          name: 'Session 1: Overview',
          topics: [
            'History and evolution of electric vehicles.',
            'Key differences between EVs and conventional vehicles.',
            'Importance of EVs in addressing environmental concerns.',
          ],
          activity:
            'Brainstorming session—how EVs can impact your daily life and community.',
        },
        {
          name: 'Session 2: Basics of EV Technology',
          topics: [
            'Core components of an EV: Battery, motor, controller, and drivetrain.',
            'How electric propulsion works: Torque, power, and efficiency.',
          ],
          demo: 'Break down an EV model or virtual simulation of an EV system.',
        },
        {
          name: 'Session 3: Battery Technology and Energy Storage',
          topics: [
            'Types of EV batteries: Lithium-ion, solid-state, and alternatives.',
            'Key parameters: Capacity, energy density, and charging time.',
          ],
          activity:
            'Analyze and compare battery specifications for popular EV models.',
        },
      ],
    },
    {
      title: 'Practical Understanding and Design Insights',
      sessions: [
        {
          name: 'Session 1: Electric Drive Systems',
          topics: [
            'Introduction to motors used in EVs: BLDC, PMSM, and induction motors.',
            'Motor control principles and energy management.',
          ],
          demo: 'Small-scale motor operation and its integration with an EV drivetrain.',
        },
        {
          name: 'Session 2: EV Power Electronics',
          topics: [
            'Role of inverters, converters, and controllers in EVs.',
            'Basics of thermal management in EV electronics.',
          ],
          demo: 'Learn how regenerative braking works with a simple demonstration.',
        },
        {
          name: 'Session 3: Charging Infrastructure and Grid Integration',
          topics: [
            'Types of chargers: Slow, fast, and ultra-fast charging.',
            'Smart charging and Vehicle-to-Grid (V2G) technology.',
          ],
          activity:
            'Group discussion—what would an ideal EV charging network look like in your city?',
        },
        {
          name: 'Session 4: Hands-on Project',
          options: [
            'Design a basic motor-controller system.',
            'Build a solar-powered EV charging station model.',
          ],
          showcase: 'Showcase results and explain design choices.',
        },
      ],
    },
  ];
}
