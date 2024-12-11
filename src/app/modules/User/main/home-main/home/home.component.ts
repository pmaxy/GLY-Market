import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemInfoComponent } from './item-info/item-info.component';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
@Input() isMiniSidebarOpen = true;

constructor(private dialog:MatDialog){

}

  items=[
    {src:"/assets/figma-photos/snacks.png",name:"Bread", amount: 122 },
    {src:"/assets/figma-photos/snacks.png",name:"Bread", amount: 122 },
    {src:"/assets/figma-photos/snacks.png",name:"Bread", amount: 122 },
    {src:"/assets/figma-photos/snacks.png",name:"Bread", amount: 122 },
    {src:"/assets/figma-photos/snacks.png",name:"Bread", amount: 122 },
    {src:"/assets/figma-photos/snacks.png",name:"Bread", amount: 122 },
    {src:"/assets/figma-photos/snacks.png",name:"Bread", amount: 122 },
    {src:"/assets/figma-photos/snacks.png",name:"Bread", amount: 122 },
    {src:"/assets/figma-photos/snacks.png",name:"Bread", amount: 122 }
  ]
  addToCart(): void {
    console.log('Item added to cart');
  }

  lists=[
    {src:"/assets/figma-photos/snacks.png", title:'Silver Watch', price: 800, itemsLeft: 200 , progressWidth:116},
    {src:"/assets/figma-photos/cake.png", title:'Cake Pie', price: 400, itemsLeft: 70 , progressWidth:120},
    {src:"/assets/figma-photos/meat.png", title:'Meat', price: 500, itemsLeft: 50 , progressWidth:130},
    {src:"/assets/figma-photos/barsoap.png", title:'BarSoap', price: 250, itemsLeft: 20 , progressWidth:106},
    {src:"/assets/figma-photos/plate.png", title:'Plate', price: 100, itemsLeft: 100 , progressWidth:100},
    {src:"/assets/figma-photos/oranges.png", title:'oranges', price: 20, itemsLeft: 40 , progressWidth:12},
    {src:"/assets/figma-photos/persil.png", title:'persil', price: 260, itemsLeft: 30 , progressWidth:112},
    {src:"/assets/figma-photos/plate2.png", title:'Ice', price: 50, itemsLeft: 20 , progressWidth:110},
    {src:"/assets/figma-photos/snacks.png", title:'Silver Watch', price: 800, itemsLeft: 200 , progressWidth:116},
    {src:"/assets/figma-photos/cake.png", title:'Cake Pie', price: 400, itemsLeft: 70 , progressWidth:120},
    {src:"/assets/figma-photos/meat.png", title:'Meat', price: 500, itemsLeft: 50 , progressWidth:130},
    {src:"/assets/figma-photos/barsoap.png", title:'BarSoap', price: 250, itemsLeft: 20 , progressWidth:106},
    {src:"/assets/figma-photos/plate.png", title:'Plate', price: 100, itemsLeft: 100 , progressWidth:100},
    {src:"/assets/figma-photos/oranges.png", title:'oranges', price: 20, itemsLeft: 40 , progressWidth:12},
    {src:"/assets/figma-photos/persil.png", title:'persil', price: 260, itemsLeft: 30 , progressWidth:112},
    {src:"/assets/figma-photos/plate2.png", title:'Ice', price: 50, itemsLeft: 20 , progressWidth:110},
  ]

  openDialog(data:any){
    const dialogOpen= this.dialog.open(ItemInfoComponent,{
        enterAnimationDuration:'200ms',
        exitAnimationDuration:'200ms',
        width:'90%',
        height:'90%',
        data,
        panelClass: "custom-dialog"
      })     
     }
}
