import { TestBed } from '@angular/core/testing';

import { MilestoneManagerService } from './milestone-manager.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('MilestoneManagerService', () => {
  let service: MilestoneManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [MilestoneManagerService],
    });
    service = TestBed.inject(MilestoneManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should successfully strip negative temp id's
  with for getMilestonesForPut`, () => {
    let projectId = 1;
    service.setMilestones([
      {
        project_id: projectId,
        delivery_date: new Date(),
        acceptance_date: new Date(),
        start_date: new Date(),
        description: '',
        id: 1,
        is_deleted: false,
      },
      {
        project_id: projectId,
        delivery_date: new Date(),
        acceptance_date: new Date(),
        start_date: new Date(),
        description: '',
        id: -1,
        is_deleted: false,
      },
    ]);
    let cleanedMilestones = service.getMilestonesForPut;
    expect(cleanedMilestones).toEqual([
      {
        project_id: projectId,
        delivery_date: new Date(),
        acceptance_date: new Date(),
        start_date: new Date(),
        description: '',
        id: 1,
        is_deleted: false,
      },
      {
        project_id: projectId,
        delivery_date: new Date(),
        acceptance_date: new Date(),
        start_date: new Date(),
        description: '',
        is_deleted: false,
      },
    ]);
  });
});
