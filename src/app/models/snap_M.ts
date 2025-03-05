import { SnapType } from "../types/snap-type";
export class Snap{
  constructor(
    public id: string,
    public title: string,
    public subTitle: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps:number,
    public location?: string,
    )
{ this.id=crypto.randomUUID().substring(0,8)}


  snap(snapType:SnapType){
    if(snapType==='snap'){
      this.addSnap()
    }else if(snapType==='unsnap'){
      this.removeSnap();
    }
  }
  addSnap():void{
    this.snaps++;
  }
  removeSnap():void{
    this.snaps--;
  }
  setLocation(location:string){
    this.location= location;
  }
  withLocation(location:string):Snap{
    this.setLocation(location);
    return this;
  }
}
