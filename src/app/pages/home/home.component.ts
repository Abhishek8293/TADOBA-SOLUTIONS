import {
  Component,
  OnInit,
  HostListener,
  Inject,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEye,
  faIndianRupee,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../header/header.component';
import { ImgSliderComponent } from '../img-slider/img-slider.component';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Product } from '../../models/Product';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { ApiService } from '../../services/api.service';
import { Quote } from '../../models/Quote';
import { ApiResponse } from '../../models/ApiResponse';

interface ServiceCardData {
  imgUrl: string;
  title: string;
  description: string;
  navigation: string;
}

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    ServiceCardComponent,
    ImgSliderComponent,
    ProductCardComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  //icons
  rightArrow = faArrowRight;
  rupee = faIndianRupee;
  rating = faStar;
  whatsapp = faWhatsapp;
  viewDetails = faEye;

  //screen size
  screenWidth!: number;

  loopNumber: number = 4;

  //service injection
  snackBarService = inject(SnackbarService);
  apiService = inject(ApiService);

  //quote form
  quoteForm!: FormGroup;

  serviceData: ServiceCardData[] = [
    {
      imgUrl: './assets/images/service/installation.jpg',
      title: 'Solar PV Plant Installation',
      description:
        'Our start-up comes with technical experts in different areas coming from several IITs with goal to provide best quality products.',
      navigation: 'Go to Service 1',
    },
    {
      imgUrl: './assets/images/service/pcb2.jpg',
      title: 'PCB Design & Fabrication',
      description:
        'Constantly working on products like Solar powered CCTV cameras, timer controlled street lights and all else..',
      navigation: 'Go to Service 2',
    },
    {
      imgUrl: './assets/images/service/customize.jpg',
      title: 'Customized Industrial Solutions',
      description:
        'Economical repair of electronic devices keeping your gadgets going on with less tussle..',
      navigation: 'Go to Service 3',
    },
    {
      imgUrl: './assets/images/service/3d-printing.jpg',
      title: '3D Prototype Printing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus erat, at vulputate nisi.',
      navigation: 'Go to Service 4',
    },
  ];

  products: Product[] = [
    {
      productId: 'TSWC1PHS',
      productName: 'Auto OFF Single Phase With (Submersible)',
      productRating: 3.5,
      productAvailability: 'in-stock',
      productPrice: 559.0,
      productImgUrl: [
        './assets/images/product/own-product/TSWC1PHS.png',
        './assets/images/product/own-product/TSWC1PHS-2.png',
      ],
      productCategory: 'Electronic',
      productDescription: [
        'Semi-Automatic Device',
        'Overflow Controller for underground tank or overhead tank',
        ' Work With Any Single Phase Motor For Home ,Office, Hospital,Restaurant.',
        'LED base for long time durability.',
        'Single tank controller.',
        'Suitable for single phase contractor starter panel of submersible motor',
        'Single/multi tank controller',
      ],
    },

    {
      productId: 'TSWC1PHT',
      productName: 'Auto OFF Single Phase With (Tullu)',
      productRating: 3.5,
      productAvailability: 'in-stock',
      productPrice: 659.0,
      productImgUrl: [
        './assets/images/product/own-product/TSWC1PHT.png',
        './assets/images/product/own-product/TSWC1PHT-2.png',
      ],
      productCategory: 'Electronic',
      productDescription: [
        'Semi-Automatic Device',
        'Overflow Controller for underground tank or overhead tank.',
        'Work With Any Single Phase Motor For Home ,Office, Hospital, Restaurant.',
        'LED base for long time durability',
        'Single/ Multi tank controller.',
      ],
    },
    {
      productId: 'TSWC1PHU',
      productName: 'Auto OFF Single Phase (Universal)',
      productRating: 3.5,
      productAvailability: 'in-stock',
      productPrice: 759.0,
      productImgUrl: [
        './assets/images/product/own-product/TSWC1PHU.png',
        './assets/images/product/own-product/TSWC1PHU-2.png',
      ],
      productCategory: 'Electronic',
      productDescription: [
        'Semi-Automatic Device',
        'It’s an auto off device for submersible. ',
        'Back side Hanging Clam.',
        'LED base for long time durability',
        'Single/ Multi tank controller.',
        'Suitable for single phase contractor starter panel of submersible motor',
      ],
    },
    {
      productId: 'TSWC3PHU',
      productName: 'Auto OFF Three Phase With (Universal)',
      productRating: 3.5,
      productAvailability: 'in-stock',
      productPrice: 1159.0,
      productImgUrl: [
        './assets/images/product/own-product/TSWC3PHU.png',
        './assets/images/product/own-product/TSWC3PHU-2.png',
        './assets/images/product/own-product/TSWC3PHU-3.png',
      ],
      productCategory: 'Electronic',
      productDescription: [
        ' Semi-Automatic Device',
        'Suitable for  three phase contractor starter panel of submersible motor',
        'Work With Any Three Phase Motor For Home ,Office, Hospital, Restaurant.',
        'LED base for long time durability.',
        'Single/ Multi tank controller.',
      ],
    },
  ];
  products3: Product[] = [
    {
      productId: 'TSWC1PHS',
      productName: 'Auto OFF Single Phase With (Submersible)',
      productRating: 3.5,
      productAvailability: 'in-stock',
      productPrice: 559.0,
      productImgUrl: [
        './assets/images/product/own-product/TSWC1PHS.png',
        './assets/images/product/own-product/TSWC1PHS-2.png',
      ],
      productCategory: 'Electronic',
      productDescription: [
        'Semi-Automatic Device',
        'Overflow Controller for underground tank or overhead tank',
        ' Work With Any Single Phase Motor For Home ,Office, Hospital,Restaurant.',
        'LED base for long time durability.',
        'Single tank controller.',
        'Suitable for single phase contractor starter panel of submersible motor',
        'Single/multi tank controller',
      ],
    },

    {
      productId: 'TSWC1PHT',
      productName: 'Auto OFF Single Phase With (Tullu)',
      productRating: 3.5,
      productAvailability: 'in-stock',
      productPrice: 659.0,
      productImgUrl: [
        './assets/images/product/own-product/TSWC1PHT.png',
        './assets/images/product/own-product/TSWC1PHT-2.png',
      ],
      productCategory: 'Electronic',
      productDescription: [
        'Semi-Automatic Device',
        'Overflow Controller for underground tank or overhead tank.',
        'Work With Any Single Phase Motor For Home ,Office, Hospital, Restaurant.',
        'LED base for long time durability',
        'Single/ Multi tank controller.',
      ],
    },
    {
      productId: 'TSWC1PHU',
      productName: 'Auto OFF Single Phase (Universal)',
      productRating: 3.5,
      productAvailability: 'in-stock',
      productPrice: 759.0,
      productImgUrl: [
        './assets/images/product/own-product/TSWC1PHU.png',
        './assets/images/product/own-product/TSWC1PHU-2.png',
      ],
      productCategory: 'Electronic',
      productDescription: [
        'Semi-Automatic Device',
        'It’s an auto off device for submersible. ',
        'Back side Hanging Clam.',
        'LED base for long time durability',
        'Single/ Multi tank controller.',
        'Suitable for single phase contractor starter panel of submersible motor',
      ],
    },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private fb: FormBuilder
  ) {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      query: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  submitQuteForm() {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
    } else {
      const formData: Quote = {
        quoteId: 1,
        customerName: this.quoteForm.value.name,
        customerEmail: this.quoteForm.value.email,
        customerMobileNumber: this.quoteForm.value.mobileNumber,
        queryDescription: this.quoteForm.value.query,
      };

      this.apiService.submitQuoteForm(formData).subscribe({
        next: (responseData: ApiResponse<string>) => {
          this.snackBarService.openSuccessSnackBar(
            'Form submitted, we will reach you in some days'
          );
          this.quoteForm.reset();
          console.log('Form submitted', responseData.data);
        },
        error: (error) => {
          console.error('Error submitting quote form', error);
          this.snackBarService.openFailedSnackBar('Failed to submit form');
        },
      });
    }
  }
}
