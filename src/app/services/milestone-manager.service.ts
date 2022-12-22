import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MilestoneManagerService {
  Milestones:any[] = [];
  @Output() Update: EventEmitter<any> = new EventEmitter();
  giveMilestones() {return this.Milestones};
  remove(milestoneToRemove:any) {this.Milestones = this.Milestones.filter((value:any)=>milestoneToRemove!=value);this.broadcastUpdate()};
  add(milestoneToAdd:any) {this.Milestones.push(milestoneToAdd)};
  getMilestonesByTFRID(TFRID:BigInteger) {};
  saveMilestonesToServer() {};
  constructor() { }
  broadcastUpdate() {this.Update.emit(this.Milestones)};
}
