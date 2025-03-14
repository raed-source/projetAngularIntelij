import {Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {SnapService} from '../../services/snap.service';
import {Snap} from '../../MODELS/snap_M';

@Component({
  selector: 'app-single-snap',
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './single-snap.component.html',
  styleUrl: './single-snap.component.scss'
})
export class SingleSnapComponent implements OnInit {
  constructor(private snapService:SnapService,private route:ActivatedRoute,private router:Router) {
  }
  snap!:Snap;
  // propriètés
  largeNumber:number=12345678.123;
  snapButtonText!: string;
  userHasSnapped!:boolean;

  ngOnInit():void{
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped=false;
    this.getSingleSnap();
  }


  getSingleSnap():void{
    const sapId = this.route.snapshot.params['id'];
    this.snap = this.snapService.getSnapById(sapId);
  }
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snapp();
    }
  }

  unSnap() {
    this.snapService.snapById(this.snap.id,'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snapp() {
    this.snapService.snapById(this.snap.id,'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
  goToSnap():void {
    this.router.navigateByUrl('snaps');
  }
}
