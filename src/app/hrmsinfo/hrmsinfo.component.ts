import { Component, ViewChild, ElementRef,AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatError } from '@angular/material/form-field';
import { MatCardFooter } from '@angular/material/card';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-hrmsinfo',
  standalone: true,
  templateUrl: './hrmsinfo.component.html',
  styleUrls: ['./hrmsinfo.component.css'],
  imports: [
    CommonModule,           // Add this for *ngIf support
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSort ,
    MatSortModule,
    MatPaginatorModule
  ],
})
export class HrmsinfoComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; // Attach paginator to the data source
    this.dataSource.paginator.pageSize = 10;
    
  }
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  selectedFile: File | null = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  dataSource = new MatTableDataSource<any>([]); // Data source for the grid
  displayedColumns: string[] = [
    'sNo',
    'ddoCode',
    'kgidNo',
    'fromMonth',
    'toMonth',
    'year',
    'employeeName',
    'designation',
    'panNo',
    'basicPay',
    'stagnationIncrement',
    'da'
  ];

  onFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const fileType = file.name.split('.').pop()?.toLowerCase();

      if (fileType === 'csv' || fileType === 'xlsx') {
        this.selectedFile = file;
        this.errorMessage = null;
      } else {
        this.selectedFile = null;
        this.errorMessage = 'Only CSV or Excel files are supported.';
      }
    }
  }

  onUpload(): void {
    if (!this.selectedFile) return;

    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result as string;
      // Example logic to parse CSV and load data into the grid
      if (this.selectedFile?.name.endsWith('.csv')) {
        this.parseCsv(fileContent);
      } else {
        this.errorMessage = 'Excel parsing is not implemented in this example.';
      }
    };
    reader.onerror = () => {
      this.errorMessage = 'An error occurred while reading the file.';
    };
    reader.readAsText(this.selectedFile);
  }

  parseCsv(csvContent: string): void {
    const rows = csvContent.split('\n').map(row => row.split(','));
   
    // Extract data into a usable format
    const tableData = rows.slice(1).map(row => ({
      sNo: row[0]?.trim(),
      ddoCode: row[1]?.trim(),
      kgidNo: row[2]?.trim(),
      fromMonth: row[3]?.trim(),
      toMonth: row[4]?.trim(),
      year: row[5]?.trim(),
      employeeName: row[6]?.trim(),
      designation: row[7]?.trim(),
      panNo: row[8]?.trim(),
      basicPay: row[9]?.trim(),
      stagnationIncrement: row[10]?.trim(),
      da: row[11]?.trim(),
    }));

    this.dataSource.data = tableData;
    this.successMessage = 'File uploaded and data loaded successfully!';
    this.errorMessage = null;
  }

  onClear(): void {
    this.selectedFile = null;
    this.errorMessage = null;
    this.successMessage = null;

    // Reset the file input field
    if (this.fileInput) {
      this.fileInput.nativeElement.value = ''; // Reset the input's value
    }
    console.log('File selection cleared.');
  }
}