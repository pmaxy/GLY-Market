import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-item-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-info.component.html',
  styleUrl: './item-info.component.css'
})
export class ItemInfoComponent implements OnInit {
  productState = {
    quantity: 1,
    notes: ''
  };

  constructor(
    private dialogRef: MatDialogRef<ItemInfoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  incrementQuantity(): void {
    this.productState.quantity++;
  }

  decrementQuantity(): void {
    if (this.productState.quantity > 1) {
      this.productState.quantity--;
    }
  }

  // Submit the form to add to cart
  onSubmit(): void {
    console.log('Form submitted:', this.productState);
    
    // Create a product object to add to the cart
    const cartItem = {
      ...this.data,               // Add all properties from the data (product info)
      quantity: this.productState.quantity, // Add quantity selected
      notes: this.productState.notes // Add notes if any
    };

    // Retrieve cart from localStorage or initialize it
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex((item: { title: any; }) => item.title === cartItem.title);

    if (existingItemIndex !== -1) {
      // Item already in cart, update its quantity
      cart[existingItemIndex].quantity += cartItem.quantity;
    } else {
      // Item is not in cart, add it
      cart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log('Cart:', cart); // Log to verify the cart state

    // Close the dialog
    this.dialogRef.close();
  }
}
