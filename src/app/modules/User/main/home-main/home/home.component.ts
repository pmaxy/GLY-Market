import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ProductControllerService } from '../../../../../services/services';
import { ProductRequest } from '../../../../../services/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  productRequest: ProductRequest = {
    id: 0, name: '', availableQuantity: 0, categoryId: 0, description: '', price: 0
  };

  @Input() isMiniSidebarOpen = true;
  cart: any[] = [];
  // Max quantity for progress calculation
  maxStock = 200;

  lists: any[] = [];

  items = [
    { src: "/assets/figma-photos/earth.png", name: "Bread", amount: 122 },
    { src: "/assets/figma-photos/earth.png", name: "Milk", amount: 90 },
    { src: "/assets/figma-photos/earth.png", name: "Eggs", amount: 35 },
    { src: "/assets/figma-photos/earth.png", name: "Butter", amount: 80 }
  ];

  constructor(
    private dialog: MatDialog,
    private productsService: ProductControllerService
  ) {}

  ngOnInit(): void {
    this.getProduct();
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart); // Parse cart from JSON string
    }

    this.getProduct(); // Fetch products
  }

  getProduct(): void {
    this.productsService.findAll({}).subscribe({
      next: (res: any[]) => {
        this.lists = res.map(product => ({
          ...product,
          progressWidth: this.calculateStockProgress(product.availableQuantity),
          itemsLeft: product.availableQuantity,
          src: product.imageUrl || '/assets/default.png', // fallback
          title: product.name,
          price: product.price
        }));
      },
      error: err => {
        console.error('Failed to fetch products', err);
        // fallback mock
        this.lists = this.getMockProducts();
      }
    });
  }

  getMockProducts(): any[] {
    const mock = [
      { src: "/assets/figma-photos/drone.jpg", title: 'Silver Watch', price: 800, itemsLeft: 200 },
      { src: "/assets/figma-photos/earth.png", title: 'Cake Pie', price: 400, itemsLeft: 70 },
      { src: "/assets/figma-photos/globe-hands.png", title: 'Meat', price: 500, itemsLeft: 50 },
      { src: "/assets/figma-photos/DJI Phantom 4 RTK.jpg", title: 'BarSoap', price: 250, itemsLeft: 20 },
      { src: "/assets/figma-photos/earth.png", title: 'Plate', price: 100, itemsLeft: 100 },
      { src: "/assets/figma-photos/drone.jpg", title: 'Oranges', price: 20, itemsLeft: 40 },
      { src: "/assets/figma-photos/honey.png", title: 'Ice', price: 50, itemsLeft: 20 },
      {src:"/assets/figma-photos/drone.jpg", title:'Silver Watch', price: 800, itemsLeft: 200 },
      {src:"/assets/figma-photos/earth.png", title:'Cake Pie', price: 400, itemsLeft: 70 },
      {src:"/assets/figma-photos/globe-hands.png", title:'Meat', price: 500, itemsLeft: 50 },
      {src:"/assets/figma-photos/DJI Phantom 4 RTK.jpg", title:'BarSoap', price: 250, itemsLeft: 20 },
      {src:"/assets/figma-photos/earth.png", title:'Plate', price: 100, itemsLeft: 100 },
      {src:"/assets/figma-photos/DJI Phantom 4 RTK.jpg", title:'oranges', price: 20, itemsLeft: 40 },
      {src:"/assets/figma-photos/earth.png", title:'persil', price: 260, itemsLeft: 30 },
      {src:"/assets/figma-photos/honey.png", title:'Ice', price: 50, itemsLeft: 20 },
      {src:"/assets/figma-photos/DJI Phantom 4 RTK.jpg", title:'Silver Watch', price: 800, itemsLeft: 200 },
      {src:"/assets/figma-photos/earth.png", title:'Cake Pie', price: 400, itemsLeft: 70 },
      {src:"/assets/figma-photos/drone.jpg", title:'Meat', price: 500, itemsLeft: 50 },
      {src:"/assets/figma-photos/DJI Phantom 4 RTK.jpg", title:'BarSoap', price: 250, itemsLeft: 20 },
      {src:"/assets/figma-photos/globe-hands.png", title:'Plate', price: 100, itemsLeft: 100 },
      {src:"/assets/figma-photos/drone.jpg", title:'oranges', price: 20, itemsLeft: 40 } ,
       {src:"/assets/figma-photos/earth.png", title:'persil', price: 260, itemsLeft: 30 },
      {src:"/assets/figma-photos/honey.png", title:'Ice', price: 50, itemsLeft: 20 },
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
      width: '90%',
      height: '90%',
      data, // pass the product data to the dialog
      panelClass: 'custom-dialog'
    });
  }
  
}
