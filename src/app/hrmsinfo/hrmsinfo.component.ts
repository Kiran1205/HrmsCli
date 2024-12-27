import { Component, ViewChild, ElementRef,AfterViewInit, TemplateRef  } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

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
    MatSortModule,
    MatPaginatorModule,
    NgxCsvParserModule
  ],
})
export class HrmsinfoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, public csvParser: NgxCsvParser) {
      // Initialize the form

    }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Attach paginator to the data source
    this.dataSource.paginator.pageSize = 10;
  }

  selectedFile: File | null = null;
  csvData: any;
  dataSource = new MatTableDataSource<any>([]); // Data source for the grid
  displayedColumns: string[] = [
   'S No.',
'DDO Code',
'KGID No',
'From Month',
'To Month',
'Year',
'Employee Name',
'Designation',
'PAN No',
'Gross Salary from Current DDO',
'Gross Salary (Provisional Considered )',
'Basic Pay',
'Stagnation Increment',
'DA',
'HRA',
'Uniform Allowance',
'Independent Charge Allowance',
'Medical Allowance',
'Other Allowances',
'Income Tax from Current DDO',
'Income Tax from Other DDO',
'EGIS',
'PT',
'LIC',
'Nps Deduction Amount',
'KGID',
'GPF',
'HBA',
'Housing Development Finance Corporation',
'Arogya Bhagya Yojana'

  ];

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }


   openUploadDialog(dialogTemplateRef : TemplateRef<any>): void {

        this.dialog.open(dialogTemplateRef, {
          width: '350px',
          height:'180px',
          disableClose: true,
        });
      }

    cancelDailog(): void {
        this.dialog.closeAll();
      }

    uploadFile(): void {
        if (!this.selectedFile) {
          console.error('No file selected!');
          return;
        }

        this.csvParser.parse(this.selectedFile, { header: true, delimiter: ',' }).subscribe({
          next: (result: any) => {
            this.csvData = result;
            this.dataSource.data = this.csvData;
            console.log(this.csvData);
            this.dialog.closeAll();
            this.selectedFile = null;
          },
          error: (error: NgxCSVParserError) => {
            console.error('Error parsing CSV: ', error);
          },
      });
    }

}
