import { Component } from '@angular/core';
import {MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatTable} from '@angular/material/table';
import {CdkTableDataSourceInput} from '@angular/cdk/table';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-menu-mat',
  imports: [
    MatMenu,
    MatMenuTrigger,
    MatButton,
    MatMenuItem
  ],
  templateUrl: './menu-mat.component.html',
  styleUrl: './menu-mat.component.scss'
})
export class MenuMatComponent {
  dataSource!: CdkTableDataSourceInput<any>;

}
