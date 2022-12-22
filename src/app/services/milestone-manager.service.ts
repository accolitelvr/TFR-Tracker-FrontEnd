import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MilestoneManagerService {
  milestones: any[] = [];
  selected: any = null;
  @Output() Update: EventEmitter<any> = new EventEmitter();
  getMilestones() {
    return this.milestones;
  }
  setSelected(milestone: any) {
    this.selected = milestone;
    this.broadcastUpdate();
  }
  getSelected(): any {
    return this.selected;
  }
  remove(milestoneToRemove: any) {
    this.milestones = this.milestones.filter(
      (value: any) => milestoneToRemove != value
    );
    this.updateRemoval(milestoneToRemove);
  }
  add(milestoneToAdd: any) {
    this.milestones.push(milestoneToAdd);
    this.broadcastUpdate();
  }
  updateRemoval(milestoneToRemove: any) {
    if (milestoneToRemove == this.selected) {
      this.selected = null;
      this.broadcastUpdate();
    }
  }
  saveMilestonesToServer() {}
  constructor() {}
  broadcastUpdate() {
    this.Update.emit(this.milestones);
  }
}
