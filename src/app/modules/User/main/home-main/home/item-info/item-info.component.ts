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
  }
   constructor(private dialogRef:MatDialogRef<ItemInfoComponent>, @Inject(MAT_DIALOG_DATA) public data:any){

   }
  ngOnInit(): void {}

  incrementQuantity(): void {
    this.productState.quantity++;
  }

  decrementQuantity(): void {
    if (this.productState.quantity > 1) {
      this.productState.quantity--;
    }
  }

  onSubmit(): void {
    console.log('Form submitted:', this.productState);
  }
}
