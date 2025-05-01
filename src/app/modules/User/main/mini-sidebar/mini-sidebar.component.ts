import { Component, Input, OnInit } from '@angular/core';


interface OrderItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  src: string;
}



@Component({
  selector: 'app-mini-sidebar',
  templateUrl: './mini-sidebar.component.html',
  styleUrl: './mini-sidebar.component.css'
})
export class MiniSidebarComponent implements OnInit {
  @Input() isOpen1 = false; 
  orderItems: OrderItem[] = [];

  ngOnInit(): void {
    // Retrieve the cart from localStorage when the component initializes
    this.loadCartFromLocalStorage();
  }

  // Load cart from localStorage
  loadCartFromLocalStorage(): void {
const cart: OrderItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

this.orderItems = cart.map((item: OrderItem): OrderItem => ({
  id: item.id,
  title: item.title, // assuming `title` is used in dialog data
  price: item.price,
  quantity: item.quantity,
  src: item.src
}));

  }

  updateItemQuantity(item: OrderItem, increment: boolean): void {
    // Retrieve the cart from localStorage
    const cart: OrderItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
    // Find the specific item in the cart
    const cartItem = cart.find((cartItem: OrderItem) => cartItem.id === item.id);
  
    if (cartItem) {
      // Update the quantity based on whether increment is true or false
      if (increment) {
        cartItem.quantity++;
      } else {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
        }
      }
  
      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // Refresh the orderItems array
      this.loadCartFromLocalStorage();
    }
  }
  

  // Delete an item from the cart
  deleteItemFromCart(item: OrderItem): void {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter((cartItem: OrderItem) => cartItem.id === item.id);

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCartFromLocalStorage(); // Refresh the orderItems array
  }

  getSubtotal(): number {
    return this.orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  getTax(): number {
    return this.getSubtotal() * 0.10; // Assuming 10% tax
  }


  
  getDiscount(): number {
    return 20; // Assuming a fixed discount for now
  }
  
  getTotal(): number {
    return this.getSubtotal() + this.getTax() - this.getDiscount();
  }
  
  
}
