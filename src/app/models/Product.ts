export class Product {
  productId: string;
  productName: string;
  productRating: number;
  productAvailability: string;
  productPrice: number;
  productImgUrl: string[];
  productCategory: string;
  productDescription: string[];

  constructor() {
    this.productId = '';
    this.productName = '';
    this.productRating = 0;
    this.productAvailability = '';
    this.productPrice = 0;
    this.productImgUrl = [];
    this.productCategory = '';
    this.productDescription = [];
  }
}

export const ourProductList: Product[] = [
  {
    productId: 'TSWC1PHS',
    productName: 'Auto OFF Single Phase With (Submersible)',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 559.00,
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
    productPrice: 659.00,
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
    productPrice: 759.00,
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
    productPrice: 1159.00,
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
  {
    productId: ' TSWC13PHDRU',
    productName: 'Auto ON/OFF 1/3 Phase With Dry Run Protection(Universal)',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 1799.0,
    productImgUrl: [
      './assets/images/product/own-product/TSWC13PHDRU.png',
      './assets/images/product/own-product/TSWC13PHDRU-2.png',
      './assets/images/product/own-product/TSWC13PHDRU-3.png',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Fully-Automatic Device',
      'Suitable for  single/three phase contractor starter panel of submersible motor',
      'Work With Any single/three Phase Motor For Home ,Office, Hospital, Restaurant.',
      'LED base for long time durability.',
      'Single/ Multi tank controller.',
    ],
  },
  {
    productId: ' TSACSLD2D',
    productName:
      '36 Watts LED Street Light (Lens Model) With D2D(Dusk To Down)',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 1799.00,
    productImgUrl: [
      './assets/images/product/own-product/TSACSLD2D.png',
      './assets/images/product/own-product/TSACSLD2D-2.jpeg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      '2400 Lumens: IP65',
      'Wide Operating Voltage Range from 110V to 270V AC',
      'Die-cast Aluminum Body for effective heat dissipation',
      'Over Voltage protection up to 440V AC',
      'Body Colour: Dark Grey',
      ' Input Voltage:  85V-265V',
    ],
  },
  {
    productId: ' TSACSL',
    productName: '36 Watts LED Street Light (Lens Model)',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 1499.00,
    productImgUrl: [
      './assets/images/product/own-product/TSACSL.png',
      './assets/images/product/own-product/TSACSL-2.jpeg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      '2400 Lumens: IP65',
      ' Wide Operating Voltage Range from 110V to 270V AC',
      ' Die-cast Aluminum Body for effective heat dissipation',
      ' Over Voltage protection up to 440V AC',
      ' Body Colour: Grey',
      'Input Voltage:  85V-265V',
    ],
  },
  {
    productId: ' TSACSLD2DWAT',
    productName: '36 Watts LED Street Light (Lens Model) With Auto Timer D2D',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 1999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSACSLD2DWAT.png',
      './assets/images/product/own-product/TSACSLD2DWAT-2.jpeg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      '2400 Lumens: IP65',
      'Wide Operating Voltage Range from 110V to 270V AC',
      'Die-cast Aluminum Body for effective heat dissipation',
      'Over Voltage protection up to 440V AC',
      'Body Colour: Grey',
      'Input Voltage:  85V-265V',
    ],
  },
  {
    productId: ' TSACDCB9W',
    productName: 'AC DC Bulb 9Watts',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 599.00,
    productImgUrl: [
      './assets/images/product/own-product/TSACDCB9W.png',
      './assets/images/product/own-product/TSACDCB9W-2.jpeg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Name of Commodity: LED Emergency / Inverter Lamp',
      'Base: B22',
      'Rated Wattage: 9W, 12W',
      'Rated Voltage: AC-240V, 50Hz',
      'Lumen: Up to 130lm per watt',
      'Colour Temperature: 6500K,  4000K,  2700K.',
      'Charging Time: 8-10 hours',
      'Emergency Time: 3-4 hours (Max)',
      'Backup Wattage: 40% of Actual',
      'Net Content: 1 N.',
    ],
  },
  {
    productId: ' TSD2DAC',
    productName: 'Day Night Smart Switch D2D(Dusk To Down) AC',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 459.00,
    productImgUrl: [
      './assets/images/product/own-product/TSD2DAC.png',
      './assets/images/product/own-product/TSD2DAC-2.png',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Load current up to 6A',
      'Load voltage 230V AC',
      'Rated input voltage 230V AC',
    ],
  },
  {
    productId: '  TSD2DDC',
    productName: 'Day Night Smart Switch D2D(Dusk To Down) DC',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 459.00,
    productImgUrl: [
      './assets/images/product/own-product/TSD2DDC.png',
      './assets/images/product/own-product/TSD2DDC-2.png',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Load wattage up to 100W',
      'Load voltage 12V DC',
      'Rated input voltage 12V DC',
    ],
  },
  {
    productId: '  TSACDCSW',
    productName: ' Automatic DC Switch',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 459.00,
    productImgUrl: [
      './assets/images/product/own-product/TSACDCSW.png',
      './assets/images/product/own-product/TSACDCSW-2.png',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'DC Input Voltage: 12V DC',
      'DC Output Voltgae (Load Voltage): 12V DC',
      'Load Range: Upto 120 Watts',
      'AC Input for  Signal Sensing only: 110-230V AC',
      'DC Load ON/OFF: Automatic',
      ' This switch automatically turns on the DC load when the main supply of the house is turned off.',
      'When the line goes out, there is no need to turn on the DC light fan etc.',
      'Tadoba Smart switch can be fitted with any type of DC equipment or load with battery.',
      ' Automatically turns off the DC load when the main supply line is returned.',
      ' By plugging this smart switch into a battery or solar powered load, the load can be turned on or off automatically.',
    ],
  },
  {
    productId: '  TSSACCTV',
    productName: ' Standlone CCTV Camera',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 17859.00,
    productImgUrl: [
      './assets/images/product/own-product/TSSACCTV.png',
      './assets/images/product/own-product/TSSACCTV-2.png',
      './assets/images/product/own-product/TSSACCTV-3.jpeg',
      './assets/images/product/own-product/TSSACCTV-4.jpeg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Solar Panel Size: 20 Watts Polycrystalline',
      'Battery Size: 7000 mAh LiPo',
      'Battery Backup : 48 Hours',
      'Charge Controller: Inbuilt Charge Controller',
      'Mounting Type: Wall/Pole Mounting',
      'Circuit Enclosure: IP65 Enclousure of Battery and Charge Controller',
      'Outer Structure: Rust Proof Coated High Grade Metal Structure ',
      'Nut Bolt Accessories: Stainless Steel Material',
      '4G Bullet Camera Support All SIM Cards',
      ' Dual Light Colour Vision support thanks to powerful LED lights',
      ' 3MP Resolution to Clearly See Objects and Human in Day and Night',
      'Crystal Clear Audio Recording Helps Clear Hear and Monitor Area Built in mic and speaker',
      ' Memory support up to 64 GB SD card provide 4 6 day data backup',
      ' Real time data wireless data transmission.',
    ],
  },
  {
    productId: 'TSACDC12V',
    productName: 'AC DC Switch 12V',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: ['./assets/images/product/own-product/TSACDC12V.jpg'],
    productCategory: 'Electronic',
    productDescription: [
      'Converts AC power to 12V DC for powering devices.',
      'Built-in battery backup ensures uninterrupted operation.',
      'Automatic switching between AC and battery power.',
      'Compact, lightweight, and portable design.',
      'Supports battery charging when AC power is restored.',
      'Offers overcharge, overcurrent, and short-circuit protection.',
      'Ideal for emergency backups, mobile electronics, and off-grid setups.',
      'Automatically powers DC loads when the main supply is off.',
      'Compatible with various DC devices and battery-powered systems.',
    ],
  },
  {
    productId: 'TSDNSS',
    productName: 'Automatic Day & Night Smart Switch',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSDNSS.jpg',
      './assets/images/product/own-product/TSDNSS-2.jpeg',
      './assets/images/product/own-product/TSDNSS-3.jpeg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Load wattage: Up to 100W.',
      'Load voltage: 220-250V AC / 12V DC.',
      'Rated input voltage: 220-250V AC / 12V DC.',
      'Saves up to 60% energy with automatic operation.',
      'Auto ON during night and auto OFF during daytime.',
      'Low power consumption for efficient performance.',
      'Available in both AC and DC types.',
      'Ideal for street lighting, garden lighting, and outdoor signs.',
      'Enhances security by automating outdoor lighting.',
      'Cost-effective with long-term energy savings and reduced maintenance.',
    ],
  },
  {
    productId: 'TSPSSDD',
    productName: 'Portable Soil Sensor Device With Display',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSPSSDD.jpg',
      './assets/images/product/own-product/TSPSSDD-2.jpg',
      './assets/images/product/own-product/TSPSSDD-3.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Measures soil Nitrogen, Phosphorus, and Potassium (NPK) levels for nutrient analysis.',
      'Monitors Electrical Conductivity (EC) to assess soil salinity and nutrient balance.',
      'pH measurement for detecting soil acidity or alkalinity.',
      'Real-time soil temperature monitoring for optimized planting and crop management.',
      'Detects soil moisture levels to manage irrigation effectively.',
      'Portable and lightweight design for convenient field use.',
      'Integrated display screen shows real-time measurements.',
      'Battery-powered for operation in remote locations.',
      'Ideal for data-driven decisions to enhance soil health and crop productivity.',
      'Empowers sustainable farming by addressing nutrient, salinity, pH, and moisture imbalances.',
    ],
  },
  {
    productId: 'TSSSDM',
    productName: 'Soil Sensor Device And Monitoring',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: ['./assets/images/product/own-product/TSSSDM.jpg'],
    productCategory: 'Electronic',
    productDescription: [
      'Monitors key nutrients: Nitrogen, Phosphorus, Potassium (NPK).',
      'Real-time readings via a digital display.',
      'Easy installation with a modular design.',
      'Provides accurate soil fertility data.',
      'Portable with battery or external power support.',
      'Rugged, waterproof, and durable for outdoor use.',
      'Addresses nutrient, salinity, and pH issues.',
      'Tracks soil temperature and moisture levels.',
      'Supports data-driven farming decisions.',
      'Ideal for sustainable farming and research.',
    ],
  },
  {
    productId: 'TSSSDMLM',
    productName: 'Soil Sensor Device And Monitoring With Lure Module',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSSSDMLM.jpg',
      './assets/images/product/own-product/TSSSDMLM-2.jpg',
      './assets/images/product/own-product/TSSSDMLM-3.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Monitors soil nutrients: Nitrogen, Phosphorus, Potassium (NPK).',
      'Includes EC sensor for salinity and nutrient level checks.',
      'Measures soil pH for optimal plant growth conditions.',
      'Tracks soil temperature to support planting and irrigation decisions.',
      'Moisture sensor ensures efficient irrigation scheduling.',
      'Modular design for easy setup and scalability.',
      'Real-time monitoring of nutrients, salinity, pH, temperature, and moisture.',
      'Helps conserve water by optimizing irrigation schedules.',
      'Supports sustainable farming with minimal environmental impact.',
      'Boosts crop yields through better soil and resource management.',
    ],
  },
  {
    productId: 'TSWLS',
    productName: 'Water Level Sensor',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSWLS.jpg',
      './assets/images/product/own-product/TSWLS-2.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Designed for water tank overflow alarms and semi-automatic level controllers.',
      'Easy installation at the top of the water tank.',
      'Triggers alarms when water contacts stainless steel terminals.',
      'Sends signals to activate overflow controllers.',
      'Durable and reliable for efficient water management.',
    ]    
  },
  {
    productId: 'TSSNPKS',
    productName: 'Soil NPK Sensor',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSSNPKS.jpg',
      './assets/images/product/own-product/TSSNPKS-2.jpg',
      './assets/images/product/own-product/TSSNPKS-3.jpg',
      './assets/images/product/own-product/TSSNPKS-4.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Handheld device for testing soil nitrogen, phosphorus, and potassium (NPK) levels.',
      'Provides fast and accurate results.',
      'Wide measurement range for diverse soil conditions.',
      'Clear LCD screen for easy result display.',
      'Portable, compact, and user-friendly design.',
    ]        
  },
  {
    productId: 'TSSC',
    productName: 'Sensor Cable',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSSC.jpg',
      './assets/images/product/own-product/TSSC-2.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Durable PVC insulation with copper conductor for efficient signal transmission.',
      'Minimizes signal loss and interference for reliable performance.',
      '90-meter length offers flexibility for diverse installations.',
    ]
  },
  {
    productId: 'TSPB',
    productName: 'Push Button',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSPB.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Latching switch: Push ON, push again OFF.',
      'Made of durable plastic and alloy for long service life.',
      'High-precision mechanism ensures reliable operation.',
      'Rating: 1.5A at 125V; 3A at 250V.',
      'Type: Momentary reset with 2-pin terminal.',
      'Flush mount design with red button.',
    ]    
  },
  {
    productId: 'TSOS',
    productName: '16A Output Socket',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSOS.jpg',
      './assets/images/product/own-product/TSOS-2.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      '16A output socket for reliable power delivery.',
      'High-capacity outlet for heavy-duty applications.',
      'Efficient power supply for industrial and construction use.',
      'Ideal for powering high-energy devices and large events.'
    ]       
  },
  {
    productId: 'TSRH90',
    productName: 'Relay H90',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSRH90.jpg',
      './assets/images/product/own-product/TSRH90-2.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Voltage: 12V, NC-20A / NO-30A, SPDT, 6-Pin.',
      'T-Type Relay H90-S-DC12V-C, 12V 20A/30A.',
      'Compact, high-performance for switching applications.',
      'Durable for industrial automation and control systems.',
      'Handles heavy-duty loads with reliable switching.'
    ]               
  },
  {
    productId: 'TSRJQC3FC',
    productName: 'Relay JQC3FC',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSRJQC3FC.jpg',
      './assets/images/product/own-product/TSRJQC3FC-2.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Voltage: 6V, Ampere: 7A, SPDT (Single Pole Double Throw) PCB Mount.',
      'Specs: Relay T-Type JQC3FC, 6V 7A, PCB Mount, Through-Hole design.',
      'Compact and high-performance relay ideal for switching applications.',
      'Durable and efficient for use in industrial automation and control systems.',
      'Handles heavy-duty applications with reliable switching capabilities.',
      'High-capacity relay suitable for both low and high-power applications.'
    ]
                  
  },
  {
    productId: 'TSRSK91',
    productName: 'Relay SK91',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 12999.00,
    productImgUrl: [
      './assets/images/product/own-product/TSRSK91.jpg',
      './assets/images/product/own-product/TSRSK91-2.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Voltage: 48V, Ampere: 40A, SPDT.',
      ' Relay SPDT 6V 7A PCB Mount',
      'Relay SK91, 48V, 40A for high-power switching.',
      'Compact, high-performance for reliable operation.',
      'Durable and efficient for industrial and automation use.'
    ]                   
  },

];
