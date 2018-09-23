import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApartmentsService {
    constructor (private httpClient: HttpClient) {}
    getApartments () {
        return this.httpClient.get('/assets/data/apartments.json');
    }
}