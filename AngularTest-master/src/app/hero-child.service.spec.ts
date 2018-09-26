import { TestBed } from '@angular/core/testing';

import { HeroChildService } from './hero-child.service';

describe('HeroChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroChildService = TestBed.get(HeroChildService);
    expect(service).toBeTruthy();
  });
});
