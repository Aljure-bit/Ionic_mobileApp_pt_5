import { TestBed } from '@angular/core/testing';

import { SerProductosService } from './ser-productos.service';

describe('SerProductosService', () => {
  let service: SerProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
