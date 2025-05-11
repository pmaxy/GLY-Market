// home.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ProductControllerService } from '../../../../../services/services';
import { ProductRequest } from '../../../../../services/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productRequest: ProductRequest = {
    id: 0, name: '', availableQuantity: 0, categoryId: 0, description: '', price: 0
  };

  @Input() isMiniSidebarOpen = true;
  cart: any[] = [];
  maxStock = 200;
  lists: any[] = [];
  groupedLists: { [key: string]: any[] } = {};

  
  constructor(
    private dialog: MatDialog,
    private productsService: ProductControllerService
  ) {}

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) this.cart = JSON.parse(storedCart);
    this.getProduct();
  }

  getProduct(): void {
    this.productsService.findAll({}).subscribe({
      next: (res: any[]) => {
        this.lists = res.map(product => ({
          ...product,
          progressWidth: this.calculateStockProgress(product.availableQuantity),
          itemsLeft: product.availableQuantity,
          src: product.imageUrl || '/assets/default.png',
          title: product.name,
          price: product.price,
          category: product.categoryName || 'Uncategorized'
        }));
        this.groupedLists = this.groupByCategory(this.lists);
      },
      error: err => {
        console.error('Failed to fetch products', err);
        this.lists = this.getMockProducts();
        this.groupedLists = this.groupByCategory(this.lists);
      }
    });
  }

  groupByCategory(products: any[]): { [key: string]: any[] } {
    return products.reduce((acc, item) => {
      const category = item.category || 'Uncategorized';
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {} as { [key: string]: any[] });
  }
  getMockProducts(): any[] {
    const mock = [
      // Surveying Equipment
      { src: "/assets/figma-photos/drone.jpg", title: 'Leica TS16 Total Station', price: 8500, itemsLeft: 10, category: 'Surveying Equipment' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Trimble R12i GNSS System', price: 9200, itemsLeft: 8, category: 'Surveying Equipment' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Topcon GT-1200 Robotic Total Station', price: 7500, itemsLeft: 6, category: 'Surveying Equipment' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Spectra Precision SP85 GNSS Receiver', price: 6800, itemsLeft: 9, category: 'Surveying Equipment' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Sokkia iM-50 Total Station', price: 4200, itemsLeft: 11, category: 'Surveying Equipment' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Bosch GLM 50 C Laser Distance Meter', price: 150, itemsLeft: 25, category: 'Surveying Equipment' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Topcon AT-B4A Auto Level', price: 250, itemsLeft: 14, category: 'Surveying Equipment' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Nedo Heavy Duty Wooden Tripod', price: 190, itemsLeft: 18, category: 'Surveying Equipment' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Seco Prism Pole with Bipod', price: 320, itemsLeft: 16, category: 'Surveying Equipment' },
    
      // GIS & Mapping Tools
      { src: "/assets/figma-photos/drone.jpg", title: 'Garmin GPSMAP 66st', price: 400, itemsLeft: 20, category: 'GIS Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'DJI Matrice 300 RTK Drone', price: 13500, itemsLeft: 5, category: 'GIS Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'DJI Phantom 4 RTK', price: 6000, itemsLeft: 7, category: 'GIS Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Emlid Reach RS2+ GNSS Receiver', price: 2000, itemsLeft: 10, category: 'GIS Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Trimble TDC600 GIS Collector', price: 1300, itemsLeft: 6, category: 'GIS Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Global Mapper Pro License', price: 750, itemsLeft: 30, category: 'GIS Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'ESRI ArcGIS Pro License (1 Year)', price: 1500, itemsLeft: 12, category: 'GIS Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'HP DesignJet T630 Plotter', price: 1100, itemsLeft: 4, category: 'GIS Tools' },
    
      // Architecture Tools
      { src: "/assets/figma-photos/drone.jpg", title: 'Leica DISTO D2 Laser Measurer', price: 200, itemsLeft: 25, category: 'Architecture Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Autodesk Revit License (1 Year)', price: 2450, itemsLeft: 15, category: 'Architecture Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Autodesk AutoCAD License (1 Year)', price: 1700, itemsLeft: 12, category: 'Architecture Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'SketchUp Pro License', price: 299, itemsLeft: 22, category: 'Architecture Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Wacom Cintiq Drawing Tablet', price: 800, itemsLeft: 10, category: 'Architecture Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Meta Quest Pro VR Headset', price: 1000, itemsLeft: 9, category: 'Architecture Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Architectural Scale Ruler Set', price: 25, itemsLeft: 30, category: 'Architecture Tools' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Rhino 3D + Grasshopper License', price: 995, itemsLeft: 13, category: 'Architecture Tools' },
    
      // Urban Planning
      { src: "/assets/figma-photos/drone.jpg", title: 'CityEngine Software License', price: 2950, itemsLeft: 12, category: 'Urban Planning' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Printed Zoning Map - New York', price: 120, itemsLeft: 30, category: 'Urban Planning' },
      { src: "/assets/figma-photos/drone.jpg", title: 'UrbanFootprint Planning Software', price: 1800, itemsLeft: 7, category: 'Urban Planning' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Smart Traffic Counter Kit', price: 550, itemsLeft: 10, category: 'Urban Planning' },
      { src: "/assets/figma-photos/drone.jpg", title: 'LoRaWAN Air Quality Sensor Node', price: 400, itemsLeft: 14, category: 'Urban Planning' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Public Participation Planning Kit', price: 300, itemsLeft: 16, category: 'Urban Planning' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Street Furniture 3D Model Pack', price: 75, itemsLeft: 18, category: 'Urban Planning' },
      { src: "/assets/figma-photos/drone.jpg", title: 'LULC Dataset - Africa Cities', price: 95, itemsLeft: 20, category: 'Urban Planning' },
    
      // Books & Resources
      { src: "/assets/figma-photos/drone.jpg", title: 'Intro to Geographic Information Systems (7th Edition)', price: 85, itemsLeft: 40, category: 'Books & Resources' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Architect’s Data by Neufert', price: 65, itemsLeft: 50, category: 'Books & Resources' },
      { src: "/assets/figma-photos/drone.jpg", title: 'The Image of the City – Kevin Lynch', price: 40, itemsLeft: 35, category: 'Books & Resources' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Design with Nature – Ian McHarg', price: 45, itemsLeft: 28, category: 'Books & Resources' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Form, Space, and Order – Francis Ching', price: 60, itemsLeft: 22, category: 'Books & Resources' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Remote Sensing & Image Interpretation', price: 90, itemsLeft: 25, category: 'Books & Resources' },
      { src: "/assets/figma-photos/drone.jpg", title: 'Sustainable Urbanism – Douglas Farr', price: 70, itemsLeft: 30, category: 'Books & Resources' },
      { src: "/assets/figma-photos/drone.jpg", title: 'QGIS Advanced Guide (eBook)', price: 25, itemsLeft: 40, category: 'Books & Resources' },
    ];
    
  
    return mock.map(product => ({
      ...product,
      progressWidth: this.calculateStockProgress(product.itemsLeft)
    }));
  }
  
  

  calculateStockProgress(available: number): number {
    if (!available || available <= 0) return 0;
    return Math.min(Math.round((available / this.maxStock) * 100), 100);
  }


  addToCart(product: any): void {
    const existing = this.cart.find(item => item.title === product.title);

    if (existing) {
      existing.quantity += 1;  // Increase quantity
    } else {
      this.cart.push({ ...product, quantity: 1 });  // Add new item to cart
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart));

    console.log('Cart:', this.cart); // Debugging purpose
  }

  clearCart(): void {
    this.cart = [];  // Clear cart array
    localStorage.removeItem('cart');  // Remove cart from localStorage
    console.log('Cart cleared');
  }


  openDialog(data: any): void {
    const dialogRef = this.dialog.open(ItemInfoComponent, {
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      width: '50%',
      height: '80%',
      data, 
      panelClass: 'custom-dialog',
  
    });
  }
}
