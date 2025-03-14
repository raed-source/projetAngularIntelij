import {Component, OnDestroy, OnInit} from '@angular/core';
import {SnapComponent} from '../snap/snap.component';
import {SnapService} from '../../services/snap.service';
import {Snap} from '../../MODELS/snap_M';
import {interval, Subject, takeUntil, tap} from 'rxjs';

@Component({
  selector: 'app-snap-list',
  imports: [
    SnapComponent
  ],
  templateUrl: './snap-list.component.html',
  styleUrl: './snap-list.component.scss'
})
export class SnapListComponent implements OnInit , OnDestroy{
  constructor(private snapService:SnapService){}
  mySnaps!:Snap[];
  private destroy$!:Subject<boolean>;

  ngOnInit(): void {
    this.mySnaps= this.snapService.getSnaps();
    this.destroy$ = new Subject<boolean>();
    interval(10000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();

  }
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
