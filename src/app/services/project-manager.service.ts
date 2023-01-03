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
  } = { startDate: new Date(), endDate: new Date('01/22/2023'), id: 23 };
  constructor() {}
  getStartDate(): Date {
    console.log(this.Project.startDate);
    return this.Project.startDate;
  }
  getEndDate(): Date {
    console.log(this.Project.endDate);
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
