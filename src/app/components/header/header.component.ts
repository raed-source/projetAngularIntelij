import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  title = 'snaps';

  ngOnInit(): void {
  }
  }
