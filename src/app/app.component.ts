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
  isOpened  = true;

  menuItems: any[] =[
    {
      icon:'home',
      label:'Home',
      route:'home'
    },
    {
      icon:'group',
      label:'DDO Users',
      route:'form16'
    },
    {
      icon:'article',
      label:'Form16',
      route:'form16'
    },
    {
      icon:'book',
      label:'IT Configuration',
      route:'training'
    },
    {
      icon:'event',
      label:'Provisionals',
      route:'event'
    },
    {
      icon:'keyboard',
      label:'Tax Computation',
      route:'support'
    },
    {
      icon:'folder',
      label:'Documents',
      route:'support'
    }
  ];

  toggleIconOnly() {
    this.isOpened = !this.isOpened;
    console.log('Item clicked:',this.isOpened);
  }
}
