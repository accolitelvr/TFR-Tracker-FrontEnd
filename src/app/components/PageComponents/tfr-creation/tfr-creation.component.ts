import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChipEmitterService } from 'src/app/services/chip-emitter.service';
import { MilestoneManagerService } from 'src/app/services/milestone-manager.service';
import { CoreMaterialModule } from 'src/app/core-modules/core-material/core-material.module';

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
  removalObserver = {
    next: (milestoneToRemove: any) =>
      this.milestoneManagerService.remove(milestoneToRemove),
  };
  selectionObserver = {
    next: (milestoneToSelect: any) => {
      this.milestoneManagerService.setSelected(milestoneToSelect);
    },
  };
  updateObserver = {
    next: () => {
      this.milestones = this.milestoneManagerService.getMilestones();
      console.log(this.milestones);
      this.selectedMilestone = this.milestoneManagerService.getSelected();
      this.milestoneForm.setValue(this.selectedMilestone);
    },
  };
  ngOnInit(): void {
    this.chipEmitterService.ToRemove.subscribe(this.removalObserver);
    this.chipEmitterService.ToSelect.subscribe(this.selectionObserver);
    this.milestoneManagerService.Update.subscribe(this.updateObserver);
    this.milestoneManagerService.add({
      name: 'hello',
      description: 'trial',
      startDate: '5thNov',
      endDate: '6thNov',
    });
    console.log(this.milestoneForm.value);
  }
  getFormMilestone() {
    return this.milestoneForm.value;
  }
  addNew() {
    this.milestoneManagerService.add({
      name: 'example',
      description: '',
      startDate: '',
      endDate: '',
    });
  }
}
