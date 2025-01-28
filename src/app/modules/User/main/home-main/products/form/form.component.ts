import { Component, Inject, OnInit } from '@angular/core';
import { ProductControllerService } from '../../../../../../services/services';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductRequest } from '../../../../../../services/models';

@Component({
  selector: 'app-form',
  // standalone: true,
  // imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  constructor(private service:ProductControllerService, private builder:FormBuilder, private toast:ToastrService, private dialogRef:MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data:any){

  }
  formdata= this.builder.group({
    name:this.builder.control('',Validators.required),
    availableQuantityn:this.builder.control('',Validators.required),
    price:this.builder.control('',Validators.required),
    categoryId:this.builder.control('',Validators.required),
    description:this.builder.control('',Validators.required),
    image:this.builder.control('',Validators.required),
    

 })
  ngOnInit(): void {

    this.formdata.patchValue(this.data)
  }

  submitData(){
    // if(this.formdata.valid){
    //   if(this.data){
    //     this.service.createProduct({
    //       body: this.authRequest
    //     }).subscribe(
    //       (res)=>{
    //         this.dialogRef.close(true);    
    //         this.toast.success('Successful Update')
    //         console.log(res)
    //       }
    //     )

    //   }else{
    //     this.service.addService(this.formdata.value).subscribe(
    //       (res)=>{
    //         this.dialogRef.close(true);
    //         this.toast.success('Successful Response')
    //       },
    //       (err)=>{
    //         this.toast.error('Error creating service')

    //       }

    //     )
    //   }


    // }else{
    //   this.toast.warning('Enter Valid data')


    // }

  }

}
