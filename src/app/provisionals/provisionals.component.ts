
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
  selector: 'app-provisionals',
  imports: [MatTableModule, MatCheckboxModule,MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatDividerModule,
      MatDialogModule,
          MatInputModule,
          ReactiveFormsModule],
  templateUrl: './provisionals.component.html',
  styleUrl: './provisionals.component.css'
})
export class ProvisionalsComponent {


  openAddDialog(): void {
    }
}
