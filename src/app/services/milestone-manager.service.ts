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
  setSelected(milestone: Milestone) {
    this.selected = milestone;
    this.broadcastUpdate();
  }
  getSelected(): any {
    return this.selected;
  }
  remove(milestoneToRemove: Milestone) {
    this.milestones = this.milestones.filter(
      (value: Milestone) => (milestoneToRemove.id = value.id)
    );
    milestoneToRemove.toRemove = true;
    this.milestones.push(milestoneToRemove);
    this.broadcastUpdate();
  }
  add(milestoneToAdd: Milestone) {
    this.milestones.push(milestoneToAdd);
    this.broadcastUpdate();
  }
  newSelected() {
    this.selected;
  }
  constructor(private chipEmitterService: ChipEmitterService) {}
  broadcastUpdate() {
    this.Update.emit();
  }
}
