import {BaseService} from './base.service';

interface MockAPI {
  id: string;
  status: boolean;
  requestedDate: Date;
}

describe('base service', () => {
  let service: BaseService;

  beforeEach(() => {
    debugger;
    service = new BaseService();
  })

  it('get return observable of type', () => {
    let response = service.get<MockAPI>('fakeAPI');
    expect(response).not.toBe(null)
  })
})
