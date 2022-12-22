import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MilestoneManagerService {
  Milestones: any[] = [];
  selected: any = null;
  @Output() Update: EventEmitter<any> = new EventEmitter();
  getMilestones() {
    return this.Milestones;
  }
  setSelected(Milestone: any) {
    this.selected = Milestone;
    this.broadcastUpdate();
  }
  getSelected(): any {
    return this.selected;
  }
  remove(milestoneToRemove: any) {
    this.Milestones = this.Milestones.filter(
      (value: any) => milestoneToRemove != value
    );
    this.updateRemoval(milestoneToRemove);
  }
  add(milestoneToAdd: any) {
    this.Milestones.push(milestoneToAdd);
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
    this.Update.emit(this.Milestones);
  }
}
