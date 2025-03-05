import {Component, OnInit} from '@angular/core';
import {SnapComponent} from '../snap/snap.component';
import {SnapService} from '../../services/snap.service';
import {Snap} from '../../models/snap_M';

@Component({
  selector: 'app-snap-list',
  imports: [
    SnapComponent
  ],
  templateUrl: './snap-list.component.html',
  styleUrl: './snap-list.component.scss'
})
export class SnapListComponent implements OnInit {
  constructor(private snapService:SnapService){}
  mySnaps!:Snap[];
  ngOnInit(): void {
    this.mySnaps= this.snapService.getSnaps()
    //initialiser le location dans services par la focntion withLocation proprièté de FaceSnap
    //this.mySnaps[0].setLocation('paris');
    // this.mySnaps[1].setLocation('lyon');
    //this.mySnaps[2].setLocation('grenoble');
  }
}
