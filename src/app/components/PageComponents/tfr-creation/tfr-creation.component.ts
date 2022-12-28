import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChipEmitterService } from 'src/app/services/chip-emitter.service';
import { MilestoneManagerService } from 'src/app/services/milestone-manager.service';
import { CoreMaterialModule } from 'src/app/core-modules/core-material/core-material.module';
import { Milestone } from 'src/app/Milestone';

@Component({
  selector: 'app-tfr-creation',
  templateUrl: './tfr-creation.component.html',
  styleUrls: ['./tfr-creation.component.scss'],
})
export class TfrCreationComponent implements OnInit {
  tfrid: number = 76839;
  milestoneForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });
  milestones: any[] = this.milestoneManagerService.getMilestones();
  selectedMilestone: any;
  constructor(
    private chipEmitterService: ChipEmitterService,
    private milestoneManagerService: MilestoneManagerService
  ) {}
  updateObserver = {
    next: () => {
      this.milestones = this.milestoneManagerService.getMilestones();
      this.selectedMilestone = this.milestoneManagerService.getSelected();
      this.milestoneForm.setValue(this.selectedMilestone);
    },
  };
  ngOnInit(): void {
    this.milestoneManagerService.Update.subscribe(this.updateObserver);
  }
  getFormMilestone() {
    return this.milestoneForm.value;
  }
  selectNew() {
    this.milestoneManagerService.selectNewMilestone();
  }
  selectExisting(milestone: Milestone) {
    this.milestoneManagerService.setSelected(milestone);
  }
}
