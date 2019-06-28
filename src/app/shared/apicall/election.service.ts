import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Election} from '../models/election.model';

@Injectable()
export class ElectionService {

  constructor(private httpClient: HttpClient) { }
  saveElection(formData: FormData) {
    return this.httpClient.post<Election>('api/v1/election/save', formData);
  }
}
