import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MilestoneManagerService {
  Milestones = [];
  getMilestones() {console.log("hi")};
  remove(milestoneToRemove:any) {this.Milestones = this.Milestones.filter((value:any)=>milestoneToRemove!=value);this.broadcastUpdate};
  constructor() { }
  broadcastUpdate() {};
}
