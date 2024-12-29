import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {FinancialYear} from '../models/financialyear';
import { ITConfigSection } from '../models/itconfigsection';
import { MatExpansionModule } from '@angular/material/expansion';

export interface UserData {
  id: number;
  name: string;
  age: number;
}

const mockData: FinancialYear[] = [
  {
    name: "FY 2024-2025",
    children: [
      {
        name: "80C",
        category: "80C",
        threshouldamount: 150000,
        isrange: true,
        amount1: 0,
        amount2: 0,
        ispercentage: false,
        percentage1: 0,
        percentage2: 0,
        isactive: true
      },
      {
        name: "80CC",
        category: "80C",
        threshouldamount: 50000,
        isrange: true,
        amount1: 0,
        amount2: 0,
        ispercentage: false,
        percentage1: 0,
        percentage2: 0,
        isactive: true
      }
    ]
  },
  {
    name: "FY 2025-2026",
    children: [
      {
        name: "80C",
        category: "80C",
        threshouldamount: 150000,
        isrange: true,
        amount1: 0,
        amount2: 0,
        ispercentage: false,
        percentage1: 0,
        percentage2: 0,
        isactive: true
      },
      {
        name: "80CC",
        category: "80C",
        threshouldamount: 50000,
        isrange: true,
        amount1: 0,
        amount2: 0,
        ispercentage: false,
        percentage1: 0,
        percentage2: 0,
        isactive: true
      }
    ]
  }
];

@Component({
  selector: 'app-itconfigurations',
  imports: [CommonModule, FormsModule, MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './itconfigurations.component.html',
  styleUrl: './itconfigurations.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class ItconfigurationsComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  childrenAccessor = (node: FinancialYear) => node.children ?? [];

  financialyears = mockData;

  hasChild = (_: number, node: FinancialYear) => !!node.children && node.children.length > 0;


  // displayedColumns: string[] = ['select', 'name', 'age'];
  // dataSource = new MatTableDataSource<UserData>([
  //   { id: 1, name: 'John Doe', age: 28 },
  //   { id: 2, name: 'Jane Smith', age: 34 },
  //   { id: 3, name: 'Sam Brown', age: 22 },
  // ]);

  // selectedRows = new Set<UserData>();

  // // Toggle selection for a single row
  // toggleSelection(row: UserData): void {
  //   if (this.selectedRows.has(row)) {
  //     this.selectedRows.delete(row);
  //   } else {
  //     this.selectedRows.add(row);
  //   }
  // }

  // // Check if a row is selected
  // isSelected(row: UserData): boolean {
  //   return this.selectedRows.has(row);
  // }

  // // Toggle select all rows
  // toggleSelectAll(event: any): void {
  //   if (event.checked) {
  //     this.dataSource.data.forEach((row) => this.selectedRows.add(row));
  //   } else {
  //     this.selectedRows.clear();
  //   }
  // }

  // // Check if all rows are selected
  // isAllSelected(): boolean {
  //   return this.selectedRows.size === this.dataSource.data.length;
  // }

  // // Check if some rows are selected
  // isSomeSelected(): boolean {
  //   return this.selectedRows.size > 0 && !this.isAllSelected();
  // }

  // // Save data on blur
  // saveData(row: UserData): void {
  //   console.log('Data saved:', row);
  // }

}
