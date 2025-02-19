import { TestBed } from '@angular/core/testing';

import { PersonaRepositoryService } from './persona-repository.service';

describe('PersonaRepositoryService', () => {
  let service: PersonaRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
