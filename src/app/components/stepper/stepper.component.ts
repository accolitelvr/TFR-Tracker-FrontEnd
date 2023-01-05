import { Component, ViewChild, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TfrManagementService } from 'src/app/services/tfr-management/tfr-management.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @ViewChild('stepper') private myStepper!: MatStepper;

  //@Input() private project!: Project;

  tfrDetailsFormGroup = this._formBuilder.group({
    tfrName: ['', Validators.required],
  });
  milestoneFormGroup = this._formBuilder.group({
    milestoneName: ['', Validators.required],
  });
  resourceFormGroup = this._formBuilder.group({
    resourceName: ['', Validators.required],
  });
  resourceSelectionValid: boolean = false;
  isLinear = true;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    protected tfrManagementService: TfrManagementService,
    protected breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 700px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.tfrManagementService.project = {
      id: 2,
      name: 'Bank Project',
      vendorId: 1,
      startDate: new Date('December 25, 2021 00:00:00'),
      endDate: new Date('December 31, 2022 00:00:00'),
      vendorSpecific: '{"vendor":"Morgan Stanley","department":"finance"}',
      status: 'DRAFT',
      version: 'V1',
      milestones: [
        {
          id: 1,
          projectId: 2,
          description: 'deployment',
          startDate: new Date('2022-12-12 09:00:00'),
          deliveryDate: new Date('2022-12-16 23:59:59'),
          acceptanceDate: new Date('2022-12-31 23:59:59'),
          isDeleted: false,
        },
      ],
      projectResources: [
        {
          project_id: 2,
          resource_id: 1,
          role: 'SCRUM MASTER',
        },
        {
          project_id: 2,
          resource_id: 2,
          role: 'SOFTWARE DEVELOPER',
        },
        {
          project_id: 2,
          resource_id: 3,
          role: 'PRODUCT OWNER',
        },
      ],
      isDeleted: false,
    };
  }

  nextStep() {
    this.myStepper.linear = false;
    this.resourceSelectionValid = true;
    this.myStepper.next();
    this.myStepper.linear = true;
  }

  stepCompleted() {
    this.resourceSelectionValid = true;
  }

  redirect() {
    this.showSnackBar('TFR submitted.', 'Done', 2000);
  }

  showSnackBar(content: string, action: string, duration: number) {
    this.snackBar.open(content, action, {
      duration: duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['mat-toolbar', 'mat-primary'],
    });
  }
}
