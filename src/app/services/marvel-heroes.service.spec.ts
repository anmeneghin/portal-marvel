import { TestBed } from '@angular/core/testing';

import { MarvelHeroesService } from './marvel-heroes.service';

describe('MarvelHeroesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelHeroesService = TestBed.get(MarvelHeroesService);
    expect(service).toBeTruthy();
  });
});
