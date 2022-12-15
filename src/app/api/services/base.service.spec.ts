import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

interface ApiResponseModel {
  id: string;
  status: boolean;
  requestedDate: Date;
}

const mockAPIResponse: Array<ApiResponseModel> = [
  {
    id: Math.random().toString(),
    requestedDate: new Date(),
    status: true,
  },
];

const API_FAKE_RESOURCE = 'entity';
const API_FAKE_HOST_RESOURCE = '/entity';

describe('base service', () => {
  let service: BaseService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseService],
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BaseService);
  });


  afterEach(() => {
    httpTestingController.verify();
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
