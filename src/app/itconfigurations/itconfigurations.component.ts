import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

export interface UserData {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-itconfigurations',
  imports: [CommonModule, FormsModule, MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule],
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

  displayedColumns: string[] = ['select', 'name', 'age'];
  dataSource = new MatTableDataSource<UserData>([
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Sam Brown', age: 22 },
  ]);

  selectedRows = new Set<UserData>();

  // Toggle selection for a single row
  toggleSelection(row: UserData): void {
    if (this.selectedRows.has(row)) {
      this.selectedRows.delete(row);
    } else {
      this.selectedRows.add(row);
    }
  }

  // Check if a row is selected
  isSelected(row: UserData): boolean {
    return this.selectedRows.has(row);
  }

  // Toggle select all rows
  toggleSelectAll(event: any): void {
    if (event.checked) {
      this.dataSource.data.forEach((row) => this.selectedRows.add(row));
    } else {
      this.selectedRows.clear();
    }
  }

  // Check if all rows are selected
  isAllSelected(): boolean {
    return this.selectedRows.size === this.dataSource.data.length;
  }

  // Check if some rows are selected
  isSomeSelected(): boolean {
    return this.selectedRows.size > 0 && !this.isAllSelected();
  }

  // Save data on blur
  saveData(row: UserData): void {
    console.log('Data saved:', row);
  }

}
