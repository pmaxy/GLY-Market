import { Component, Input } from '@angular/core';
interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
@Component({
  selector: 'app-mini-sidebar',
  // standalone: true,
  // imports: [],
  
  templateUrl: './mini-sidebar.component.html',
  styleUrl: './mini-sidebar.component.css'
})
export class MiniSidebarComponent {
  @Input() isOpen1 = false; 
  orderItems: OrderItem[] = [
    {
      id: 1,
      name: "Elgon 2l Milk",
      price: 400,
      quantity: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/1cda1be9d1894bb2995be32d30ac20e2/74e93a1524228a81f52957d5cd84812a09bf6623290d3103b067596e31f89676?apiKey=1cda1be9d1894bb2995be32d30ac20e2&"
    },
    {
      id: 2,
      name: "Elgon 2l Milk",
      price: 400,
      quantity: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/1cda1be9d1894bb2995be32d30ac20e2/724a75cc88aa5b15c546e00845cb11b0cfb8d5bfe1d0b65b119bec2c9f185bba?apiKey=1cda1be9d1894bb2995be32d30ac20e2&"
    },
    {
      id: 3,
      name: "Elgon 2l Milk",
      price: 400,
      quantity: 2,
      image: "https://cdn.builder.io/api/v1/image/assets/1cda1be9d1894bb2995be32d30ac20e2/1ee6e5c2e0a1492d42b4ba76bcdb0403cafe7e797247cc6b02744108fbe1fbff?apiKey=1cda1be9d1894bb2995be32d30ac20e2&"
    }
  ];
}
