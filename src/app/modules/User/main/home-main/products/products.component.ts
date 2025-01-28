import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductControllerService } from '../../../../../services/services';
import { ToastrService } from 'ngx-toastr';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormComponent } from './form/form.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {faFilePdf, faSearch,faEye,faMobileScreen,faFileInvoiceDollar,faMoneyBillAlt,faPenToSquare,faTrashCan,faFileWord, faFileExcel,faFileCsv, faBusinessTime,faStore,faCartShopping }from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
@Component({
  selector: 'app-products',
  // standalone: true,
  // imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  displayedColumns: string[] = [
    "No","itemName","availableQuantity","description","servicePrice","categoryName","categoryDescription","action"
  ];

  fabusinesstime = faBusinessTime;
  faMoneyBillAlt=faMoneyBillAlt;
  faCartShopping =faCartShopping ;
  faEye=faEye;
  fastore=faStore;
  faFileCsv=faFileCsv;
  faFileExcel=faFileExcel;
  faFileWord=faFileWord;
  faTrashCan=faTrashCan;
  faPenToSquare=faPenToSquare;
  faFileInvoiceDollar=faFileInvoiceDollar;
  faMobileScreen=faMobileScreen;
  faSearch=faSearch;
  faFilePdf=faFilePdf;
  data: any;
  dataSource:any;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('table') table!: ElementRef;
  constructor(private dialog:MatDialog, private productService: ProductControllerService, private toast:ToastrService ){

  }

  ngOnInit() {
    this.getAllData();
    
  }

  
  getAllData(){
    this.productService.findAll()
    .subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
      }
    } )

  };

  openDialog(){
    const dialogOpen= this.dialog.open(FormComponent,{
        enterAnimationDuration:'1000ms',
        exitAnimationDuration:'500ms',
        width:'50%',
        height:'90%',
       
      })
 
      dialogOpen.afterClosed().subscribe(
       (val:any)=>{
         if(val){
           this.getAllData()
         }
 
       })
      
     }
  
     deleteDialog(serviceId: any): void {
      const dialogRef = this.dialog.open(DeleteDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.productService.deleteCustomer(serviceId).subscribe(
            () => {
              this.dataSource.data = this.dataSource.data.filter((item:any) => item.serviceId !== serviceId);
              console.log(this.dataSource.data);
              
              this.toast.success('Product deleted successfully');
            },
            error => {
              console.error('Error deleting product:', error);
              this.toast.error('Failed to delete product');
            }
          );
        } else {
          this.toast.info('Deletion cancelled');
        }
      });
    } 

    updateData(data: any){
      this.dialog.open(FormComponent,{
          enterAnimationDuration:'1000ms',
          exitAnimationDuration:'500ms',
          width:'50%',
          height:'90%',
          data,
        })
}

applyFilter(event: Event){
  const filterValue=(event.target as HTMLInputElement).value;
  this.dataSource.filter=filterValue.trim().toLowerCase();

  if(this.dataSource.paginator){
    this.dataSource.paginator.firstPage()
  }

}
exportToPDF(): void {
  const doc = new jspdf;

  const table = this.table.nativeElement;

  html2canvas(table).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 208; // A4 page width (in mm)
    const imgHeight = canvas.height * imgWidth / canvas.width;

    doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    doc.save('businesses.pdf');
  });
}

exportToExcel(): void {
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'businesses.xlsx');
}


}
