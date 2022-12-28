import { EventEmitter, Injectable, Output } from '@angular/core';
import { Milestone } from '../Milestone';
import { ChipEmitterService } from './chip-emitter.service';

@Injectable({
  providedIn: 'root',
})
export class MilestoneManagerService {
  milestones: Milestone[] = [];
  selected: Milestone | null = null;
  @Output() Update: EventEmitter<any> = new EventEmitter();
  getMilestones() {
    return this.milestones.filter(
      (milestone: Milestone) => milestone.toRemove == false
    );
  }
  setSelected(milestone: Milestone | null) {
    this.selected = milestone;
    this.broadcastUpdate();
  }
  getSelected(): any {
    return this.selected;
  }

  updateToRemove(milestone: Milestone) {
    this.remove(milestone);
    milestone.toRemove = true;
    this.milestones.push(milestone);
    this.broadcastUpdate();
  }
  saveMilestone(milestoneToAdd: Milestone | null) {
    if (milestoneToAdd != null) {
      this.remove(milestoneToAdd);
      this.add(milestoneToAdd);
      this.setSelected(null);
    }
    this.broadcastUpdate();
  }

  submittable() {
    if (this.getMilestones().length >= 1) {
      console.log(this.milestones);
      console.log(true);
      return true;
    }
    console.log(false);
    console.log(this.milestones);
    return false;
  }

  selectNewMilestone() {
    let idOfNew: number = this.generateIdOfNew();
    this.selected = {
      name: '',
      startDate: new Date(),
      endDate: new Date(),
      description: '',
      id: idOfNew,
      toRemove: false,
    };
    this.broadcastUpdate();
  }
  private add(milestoneToAdd: Milestone) {
    this.milestones.push(milestoneToAdd);
  }
  private remove(milestoneToRemove: Milestone) {
    this.milestones = this.milestones.filter(
      (value: Milestone) => milestoneToRemove.id != value.id
    );
  }
  private broadcastUpdate() {
    this.Update.emit();
  }
  private generateIdOfNew() {
    return Math.min(0, ...this.milestones.map((milestone) => milestone.id)) - 1;
  }
}
