import { TestBed } from '@angular/core/testing';

import { UserapiInterceptor } from './userapi.interceptor';

describe('UserapiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserapiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UserapiInterceptor = TestBed.inject(UserapiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
