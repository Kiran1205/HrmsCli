import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatButtonModule,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'tax-compute';
  isOpened  = false;

  menuItems: any[] =[
    {
      icon:'home',
      label:'Home',
      route:'home'
    },
    {
      icon:'handshake',
      label:'Form16',
      route:'form16'
    },
    {
      icon:'book',
      label:'Training',
      route:'training'
    },
    {
      icon:'event',
      label:'Events',
      route:'event'
    },
    {
      icon:'help',
      label:'Support',
      route:'support'
    }
  ];

  toggleIconOnly() {
    this.isOpened = !this.isOpened;
    console.log('Item clicked:',this.isOpened);
  }
}
