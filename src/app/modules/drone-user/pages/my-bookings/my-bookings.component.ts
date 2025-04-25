import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { faBan, faEye } from '@fortawesome/free-solid-svg-icons';

export interface Booking {
  service: string;
  date: Date;
  location: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
}

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['service', 'date', 'location', 'status', 'actions'];
  dataSource: MatTableDataSource<Booking> = new MatTableDataSource();
  faEye = faEye;
  faBan = faBan;
  bookings: Booking[] = [
    {
      service: 'Geospatial Mapping',
      date: new Date('2024-04-25'),
      location: 'Nairobi',
      status: 'Confirmed'
    },
    {
      service: 'Ceremony Coverage',
      date: new Date('2024-05-10'),
      location: 'Mombasa',
      status: 'Pending'
    },
    {
      service: 'Construction Site Inspection',
      date: new Date('2024-06-03'),
      location: 'Kisumu',
      status: 'Cancelled'
    }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource.data = this.bookings;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cancelBooking(row: Booking) {
    row.status = 'Cancelled';
    this.dataSource.data = [...this.bookings];
  }
}
