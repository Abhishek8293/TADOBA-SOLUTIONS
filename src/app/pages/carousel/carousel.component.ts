
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import {
//   Component,
//   ElementRef,
//   Input,
//   OnDestroy,
//   OnInit,
//   Renderer2,
//   ViewChild,
//   NgZone,
//   AfterViewInit,
//   Inject,
//   PLATFORM_ID,
//   HostListener,
// } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';

// interface CarouselData {
//   imgUrl: string;
//   imgTitle: string;
//   imgDescription: string;
//   navUrl: string;
// }

// @Component({
//   selector: 'app-carousel',
//   standalone: true,
//   imports: [CommonModule, MatButtonModule, MatIconModule],
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css'],
// })
// export class CarouselComponent implements AfterViewInit, OnDestroy {
//   carouselData: CarouselData[] = [
//     {
//       imgUrl: './assets/images/service3.jpg',
//       imgTitle: 'INSTALLATION',
//       imgDescription: 'Description for installation',
//       navUrl: 'path/to/nav1',
//     },
//     {
//       imgUrl: './assets/images/service1.jpg',
//       imgTitle: 'MAINTENANCE',
//       imgDescription: 'Description for maintenance',
//       navUrl: 'path/to/nav2',
//     },
//     {
//       imgUrl: './assets/images/service4.jpg',
//       imgTitle: 'ELECTRONIC DEVICES',
//       imgDescription: 'Description for electronic devices',
//       navUrl: 'path/to/nav3',
//     },
//     {
//       imgUrl: './assets/images/service2.jpg',
//       imgTitle: 'COMMISSIONING',
//       imgDescription: 'Description for commissioning',
//       navUrl: 'path/to/nav4',
//     },
//   ];

//   @Input() indicators: boolean = true;
//   @Input() autoSlide: boolean = true;
//   @Input() slideInterval: number = 1000;


//   selectedIndex: number = 0;
//   private autoSlideInterval: any;
//   private swipeCoord: [number, number] = [0, 0];
//   private swipeTime: number = new Date().getTime();

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
//   ngAfterViewInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       setTimeout(() => {
//         if (this.autoSlide && this.carouselData.length > 0) {
//           // this.autoSlideImages();
//         }
//       }, 0);
//     }
//   }

//   ngOnDestroy(): void {
//     if (this.autoSlideInterval) {
//       clearInterval(this.autoSlideInterval);
//     }
//   }

//   startAutoSlide() {
//     this.autoSlideInterval = setInterval(() => {
//       this.ngZone.run(() => {
//         this.onNextClick();
//       });
//     }, this.slideInterval);
//   }


//   selectImage(index: number) {
//     this.selectedIndex = index;
//   }

//   onPrevClick() {
//     this.selectedIndex =
//       this.selectedIndex === 0
//         ? this.carouselData.length - 1
//         : this.selectedIndex - 1;
//   }

//   onNextClick() {
//     this.selectedIndex =
//       this.selectedIndex === this.carouselData.length - 1
//         ? 0
//         : this.selectedIndex + 1;
//   }

//   @HostListener('document:keydown', ['$event'])
//   handleKeyboardEvent(event: KeyboardEvent): void {
//     if (event.key === 'ArrowRight') {
//       this.onNextClick();
//     } else if (event.key === 'ArrowLeft') {
//       this.onPrevClick();
//     }
//   }

//   onSwipe(e: TouchEvent, when: string) {
//     const coord: [number, number] = [
//       e.changedTouches[0].clientX,
//       e.changedTouches[0].clientY,
//     ];
//     const time = new Date().getTime();

//     if (when === 'start') {
//       this.swipeCoord = coord;
//       this.swipeTime = time;
//     } else if (when === 'end') {
//       const direction = [
//         coord[0] - this.swipeCoord[0],
//         coord[1] - this.swipeCoord[1],
//       ];
//       const duration = time - this.swipeTime;

//       if (
//         duration < 1000 &&
//         Math.abs(direction[0]) > 30 &&
//         Math.abs(direction[0]) > Math.abs(direction[1] * 3)
//       ) {
//         if (direction[0] < 0) {
//           this.onNextClick();
//         } else {
//           this.onPrevClick();
//         }
//       }
//     }
//   }
// }
