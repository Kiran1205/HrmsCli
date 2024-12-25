
import { Component, TemplateRef} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';  // Optional, for icon buttons
import { MatTooltipModule } from '@angular/material/tooltip';

import {MatDividerModule} from '@angular/material/divider';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-ddousers',
  imports: [MatTableModule, MatCheckboxModule,MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule,
        MatInputModule,
        ReactiveFormsModule],
  templateUrl: './ddousers.component.html',
  styleUrl: './ddousers.component.css'
})
export class DdousersComponent  {

  displayedColumns: string[] = [ 'position', 'name', 'kgid', 'phno','location','station','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ddouserForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
      // Initialize the form
      this.ddouserForm = this.fb.group({
        name: ['', Validators.required],
        kgid: ['', [Validators.required]],
        location:[''],
        station:[''],
        phno:[]
      });
    }

  // Open the "Add Student" dialog
   openAddDialog(dialogTemplateRef : TemplateRef<any>): void {
      const dialogRef = this.dialog.open(dialogTemplateRef, {
        width: '400px'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
         // this.students.push(result); // Add the new student to the list
        }
      });
    }

    cancelDailog(dialogTemplateRef : TemplateRef<any>): void {
      this.dialog.closeAll();
    }

  editRecord(): void {
    console.log('edit:');
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  kgid: number;
  location: string;
  phno: number;
  station: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Kiran', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 2, name: 'Dileep', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 3, name: 'Thulasi', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 4, name: 'Pradeep', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 1, name: 'Kiran', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 2, name: 'Dileep', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 3, name: 'Thulasi', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 4, name: 'Pradeep', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 1, name: 'Kiran', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 2, name: 'Dileep', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 3, name: 'Thulasi', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
  {position: 4, name: 'Pradeep', kgid: 1234567, location: 'West banglore',phno:8884684500,station:'Madiwala'},
];
