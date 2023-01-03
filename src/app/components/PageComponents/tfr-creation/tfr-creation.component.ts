import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MilestoneManagerService } from 'src/app/services/milestone-manager.service';
import { Milestone } from 'src/app/Milestone';
import { ProjectManagerService } from 'src/app/services/project-manager.service';

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
  @Output() nextStepEmitter = new EventEmitter<boolean>();
  projectStartDate: Date;
  projectEndDate: Date;
  tfrid: number;
  milestones: any[] = this.milestoneManagerService.getMilestones();
  selectedMilestone: Milestone | null = null;
  submittable: boolean = false;
  milestoneForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
    }),
    startDate: new FormControl<Date>(
      this.projectManagerService.getStartDate(),
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    ),
    endDate: new FormControl<Date>(this.projectManagerService.getStartDate(), {
      nonNullable: true,
    }),
  });
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
  submitMilestones() {
    let hasSucceeded = this.milestoneManagerService.submitMilestones();
    if (hasSucceeded) {
      this.nextStepEmitter.emit(true);
    }
  }
}
