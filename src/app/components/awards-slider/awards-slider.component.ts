import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  NgZone,
  PLATFORM_ID,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

declare const Swiper: any;

@Component({
  selector: 'app-awards-slider',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './awards-slider.component.html',
  styleUrl: './awards-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsSliderComponent implements AfterViewInit {
  awards = [
    { imgUrl: 'assets/images/awards/awards1.jpg', title: 'Award 1' },
    { imgUrl: 'assets/images/awards/awards2.jpg', title: 'Award 2' },
    { imgUrl: 'assets/images/awards/awards3.jpg', title: 'Award 3' },
    { imgUrl: 'assets/images/awards/awards4.jpg', title: 'Award 4' },
    { imgUrl: 'assets/images/awards/awards5.jpg', title: 'Award 5' },
    { imgUrl: 'assets/images/awards/awards6.jpg', title: 'Award 1' },
    { imgUrl: 'assets/images/awards/awards7.jpg', title: 'Award 2' },
    { imgUrl: 'assets/images/awards/awards8.jpg', title: 'Award 3' },
    { imgUrl: 'assets/images/awards/awards9.jpg', title: 'Award 4' },
    { imgUrl: 'assets/images/awards/awards10.jpg', title: 'Award 5' },
    { imgUrl: 'assets/images/awards/awards11.jpg', title: 'Award 4' },
    { imgUrl: 'assets/images/awards/awards12.jpg', title: 'Award 5' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        new Swiper('.slider-wrapper', {
          loop: true,
          grabCursor: true,
          spaceBetween: 6,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },

          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            init: function () {
              document
                .querySelector('.slider-wrapper')
                ?.classList.add('swiper-initialized');
            },
          },
          breakpoints: {
            412: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          },
        });
      });
    }
  }
}
