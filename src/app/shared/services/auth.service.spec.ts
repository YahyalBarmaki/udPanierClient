import { TestBed } from '@angular/core/testing';

import { AuthServices } from 'src/app/shared/services/auth.services';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthServices = TestBed.get(AuthServices);
    expect(service).toBeTruthy();
  });
});
