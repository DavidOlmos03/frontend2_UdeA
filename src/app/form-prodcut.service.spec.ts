import { TestBed } from '@angular/core/testing';

import { FormProdcutService } from './form-prodcut.service';

describe('FormProdcutService', () => {
  let service: FormProdcutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormProdcutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
