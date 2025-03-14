import { Injectable } from '@angular/core';
import {Snap} from '../MODELS/snap_M';
import {SnapType} from '../types/snap-type';

@Injectable({
  providedIn: 'root'
})
export class SnapService {

  constructor() { }

  private mySnaps: Snap[]=[
    new Snap('1','couch toi','sub','desc','assets/berlin.jpg', new Date(),10).withLocation('lyon'),
    new Snap('2','couch vows','sub','desc','assets/berlin.jpg', new Date(),10).withLocation('greoble'),
    new Snap('3','couch tours','sub','desc','assets/berlin.jpg', new Date(),160).withLocation('paris')
  ];



  getSnaps():Snap[]{
    return [...this.mySnaps];
  }

  getSnapById(id:string):Snap{
    const foundSnap=this.mySnaps.find(snap=>snap.id===id);
    if(!foundSnap){
      throw new Error('Face snap n\'est pas trouvé!')// pas besoin de Else parce que throw intérompe l'éxecution de la fonction
    }
    return foundSnap;
  }
  snapById(snapId:string, snapType:SnapType):void{
    const snap:Snap=this.getSnapById(snapId);
    snap.snap(snapType);
  }

}
