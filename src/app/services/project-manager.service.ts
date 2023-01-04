import { Injectable } from '@angular/core';
import { Milestone } from '../Milestone';

@Injectable({
  providedIn: 'root',
})
export class ProjectManagerService {
  Project: {
    startDate: Date;
    endDate: Date;
    id: number;
    milestones?: Milestone[];
  } = {
    startDate: new Date('01/15/2023'),
    endDate: new Date('01/22/2023'),
    id: 23,
  };
  constructor() {}
  getStartDate(): Date {
    return this.Project.startDate;
  }
  getEndDate(): Date {
    return this.Project.endDate;
  }
  getId(): number {
    return this.Project.id;
  }
  setMilestones(milestones: Milestone[]) {
    this.Project.milestones = milestones;
    return true;
  }
}
