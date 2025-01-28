import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductControllerService } from '../../../../../../services/services';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private service: ProductControllerService){}
  


  ngOnInit(){
    console.log(this.data)
  }

  deleteItem(){
    const response = this.service.deleteCustomer(this.data)

    response.subscribe(
      (value: any) => {
        console.log(value)
      }, 
      (error: any) => {
        console.log(error)
      }
    )
  }


  
}
