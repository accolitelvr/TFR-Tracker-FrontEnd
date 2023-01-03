import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MilestoneManagerService } from 'src/app/services/milestone-manager.service';
import { CoreMaterialModule } from 'src/app/core-modules/core-material/core-material.module';
import { Milestone } from 'src/app/Milestone';
import { identifierName } from '@angular/compiler';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-tfr-creation',
  templateUrl: './tfr-creation.component.html',
  styleUrls: ['./tfr-creation.component.scss'],
})
export class TfrCreationComponent implements OnInit {
  constructor(
    private milestoneManagerService: MilestoneManagerService,
    private projectManagerService: ProjectManagerService
  ) {
    this.projectStartDate = this.projectManagerService.getStartDate();
    this.projectEndDate = this.projectManagerService.getEndDate();
    this.tfrid = this.projectManagerService.getId();
  }
  submittable: boolean = false;
  milestoneForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    startDate: new FormControl(new Date(), { nonNullable: true }),
    endDate: new FormControl(new Date(), { nonNullable: true }),
  });
  milestones: any[] = this.milestoneManagerService.getMilestones();
  selectedMilestone: Milestone | null = null;
  constructor(private milestoneManagerService: MilestoneManagerService) {}
  updateObserver = {
    next: () => {
      this.milestones = this.milestoneManagerService.getMilestones();
      this.selectedMilestone = this.milestoneManagerService.getSelected();
      this.milestoneForm.setValue(this.ConvertMilestoneToFormData());
      this.submittable = this.milestoneManagerService.submittable();
    },
  };
  ngOnInit(): void {
    this.milestoneManagerService.Update.subscribe(this.updateObserver);
  }
  getFormMilestone(): Milestone | null {
    if (this.selectedMilestone != null) {
      let { id, toRemove } = this.selectedMilestone;
      return {
        id: id,
        toRemove: toRemove,
        ...this.milestoneForm.getRawValue(),
      };
    }
    return null;
  }
  ConvertMilestoneToFormData() {
    if (this.selectedMilestone != null) {
      let { id, toRemove, ...FormOut } = this.selectedMilestone;
      return FormOut;
    } else {
      return {
        name: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
      };
    }
  }

  getMinDate() {
    return this.projectManagerService.getStartDate();
  }
  getMaxDate() {
    return this.projectManagerService.getEndDate();
  }
  selectNew() {
    this.milestoneManagerService.selectNewMilestone();
  }
  selectExisting(milestone: Milestone) {
    this.milestoneManagerService.setSelected(milestone);
  }
  discardSelected() {
    this.milestoneManagerService.setSelected(null);
  }
  saveSelected() {
    this.milestoneManagerService.saveMilestone(this.getFormMilestone());
  }
  removeMilestone(milestone: Milestone) {
    this.milestoneManagerService.updateToRemove(milestone);
  }
  selectMilestone(milestone: Milestone) {
    this.milestoneManagerService.setSelected(milestone);
  }
}
