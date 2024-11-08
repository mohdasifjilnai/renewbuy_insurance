import { TestBed } from '@angular/core/testing';

import { IframeCommunicationServiceTsService } from './iframe-communication.service.ts.service';

describe('IframeCommunicationServiceTsService', () => {
  let service: IframeCommunicationServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IframeCommunicationServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
