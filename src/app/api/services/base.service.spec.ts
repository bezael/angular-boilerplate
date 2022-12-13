import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {BaseService} from './base.service';

interface MockAPI {
  id: string;
  status: boolean;
  requestedDate: Date;
}

describe('base service', () => {
  let service: BaseService;

  TestBed.configureTestingModule(
    {
      providers: [ BaseService],
      imports: [ HttpClientModule]
    }
  )
  beforeEach(() => {
    service = TestBed.inject(BaseService)
  })

  it('get return observable of type', () => {
    let response = service.get<MockAPI>('fakeAPI');
    expect(response).not.toBe(null)
  })
})
