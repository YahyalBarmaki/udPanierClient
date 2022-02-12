import { TestBed } from '@angular/core/testing';

import { AdminProduitService } from './admin-produit.service';

describe('AdminProduitService', () => {
  let service: AdminProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
