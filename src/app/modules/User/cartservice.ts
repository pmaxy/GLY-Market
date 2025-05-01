import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface OrderItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  src: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<OrderItem[]>(this.loadCart());
  cartItems$ = this.cartItemsSubject.asObservable();

  private loadCart(): OrderItem[] {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }

  private saveCart(cart: OrderItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartItemsSubject.next(cart);
  }

  getCart(): OrderItem[] {
    return this.cartItemsSubject.value;
  }

  getCartCount(): number {
    return this.getCart().reduce((total, item) => total + item.quantity, 0);
  }

  addToCart(product: OrderItem) {
    const cart = this.getCart();
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    this.saveCart(cart);
  }

  updateQuantity(itemId: number, increment: boolean) {
    const cart = this.getCart();
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    this.saveCart(cart);
  }

  removeItem(itemId: number) {
    const cart = this.getCart().filter(item => item.id !== itemId);
    this.saveCart(cart);
  }

  clearCart() {
    this.saveCart([]);
  }
}
