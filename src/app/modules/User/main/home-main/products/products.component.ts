import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductControllerService } from '../../../../../services/services';
import { ToastrService } from 'ngx-toastr';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormComponent } from './form/form.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

import {
  faFilePdf, faSearch, faEye, faMobileScreen,
  faFileInvoiceDollar, faMoneyBillAlt, faPenToSquare,
  faTrashCan, faFileWord, faFileExcel, faFileCsv,
  faBusinessTime, faStore, faCartShopping
} from '@fortawesome/free-solid-svg-icons';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    "No", "itemName", "availableQuantity", "description",
    "servicePrice", "categoryName", "categoryDescription", "action"
  ];

  // Icons
  fabusinesstime = faBusinessTime;
  faMoneyBillAlt = faMoneyBillAlt;
  faCartShopping = faCartShopping;
  faEye = faEye;
  fastore = faStore;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faFileWord = faFileWord;
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  faFileInvoiceDollar = faFileInvoiceDollar;
  faMobileScreen = faMobileScreen;
  faSearch = faSearch;
  faFilePdf = faFilePdf;

  dataSource: any;
  useMockData = true; // Set to false to use backend API

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('table') table!: ElementRef;

  constructor(
    private dialog: MatDialog,
    private productService: ProductControllerService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    if (this.useMockData) {
      const mockProducts = [
        {
          serviceId: 1,
          itemName: 'Product A',
          availableQuantity: 10,
          description: 'High quality product A',
          servicePrice: 100,
          categoryName: 'Category 1',
          categoryDescription: 'Main category A'
        },
        {
          serviceId: 2,
          itemName: 'Product B',
          availableQuantity: 20,
          description: 'Durable product B',
          servicePrice: 200,
          categoryName: 'Category 2',
          categoryDescription: 'Main category B'
        },
        {
          serviceId: 3,
          itemName: 'Product C',
          availableQuantity: 15,
          description: 'Affordable and reliable',
          servicePrice: 150,
          categoryName: 'Category 3',
          categoryDescription: 'Specialty items'
        }
      ];
      this.dataSource = new MatTableDataSource(mockProducts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.productService.findAll().subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.error('Error fetching data:', err);
          this.toast.error('Failed to load data');
        }
      });
    }
  }

  openDialog() {
    const dialogOpen = this.dialog.open(FormComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      height: '90%'
    });

    dialogOpen.afterClosed().subscribe((val: any) => {
      if (val) {
        this.getAllData();
      }
    });
  }

  deleteDialog(serviceId: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter((item: any) => item.serviceId !== serviceId);
        this.toast.success('Product deleted successfully');
      } else {
        this.toast.info('Deletion cancelled');
      }
    });
  }

  updateData(data: any) {
    this.dialog.open(FormComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      height: '90%',
      data
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportToPDF(): void {
    const doc = new jsPDF();
    const table = this.table.nativeElement;

    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save('products.pdf');
    });
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Products');
    XLSX.writeFile(wb, 'products.xlsx');
  }
}
