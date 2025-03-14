import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Snap} from '../../MODELS/snap_M';
import {Router} from '@angular/router';
import {SnapService} from '../../services/snap.service';

@Component({
  selector: 'app-snap',
  imports: [
    MatCardModule, MatButtonModule
  ],
  templateUrl: './snap.component.html',
  styleUrl: './snap.component.scss'
})
export class SnapComponent implements OnInit {
  @Input() snap!:Snap;
  constructor(private snapService:SnapService,private router:Router) {
  }

  ngOnInit():void{

  }

  toSeeSnap() {
    this.router.navigateByUrl(`snap/${this.snap.id}`);

  }
}
