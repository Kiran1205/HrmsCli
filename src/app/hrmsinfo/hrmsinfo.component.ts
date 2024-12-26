import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
  ],
})
export class HrmsinfoComponent {
  selectedFile: File | null = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  // Handle file selection
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input?.files?.length) {
      const file = input.files[0];
      const fileType = file.name.split('.').pop()?.toLowerCase();

      // Allow only CSV and Excel files
      if (fileType === 'csv' || fileType === 'xlsx') {
        this.selectedFile = file;
        this.errorMessage = null;
      } else {
        this.errorMessage = 'Invalid file type. Only CSV and Excel files are allowed.';
        this.selectedFile = null;
      }
    }
  }

  // Handle file upload
  onUpload(): void {
    if (this.selectedFile) {
      // Simulate a file upload (Replace with actual API call logic)
      setTimeout(() => {
        this.successMessage = `File "${this.selectedFile?.name}" uploaded successfully.`;
        this.selectedFile = null;
        this.errorMessage = null;
      }, 1000);
    }
  }
}
