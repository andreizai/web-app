import { TestBed } from '@angular/core/testing';

import { GithubGistService } from './github-gist.service';

describe('GithubGistService', () => {
  let service: GithubGistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubGistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
