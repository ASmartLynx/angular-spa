import {Component, OnInit} from '@angular/core';
import {ApartmentsService} from '../services/apartments.service';

@Component ({
    selector: 'apartments-list',
    templateUrl: './apartments-list.component.html',
    styleUrls: ['./apartments-list.component.css']
})

export class ApartmentsList implements OnInit {
    title = 'Список квартир';
    apartments;
    apartmentsCache;
    streetFilter = '';
    constructor (private apartmentsService: ApartmentsService){}
    ngOnInit() {
        this.apartmentsService.getApartments().subscribe(data => {
            this.apartmentsCache = data;
            this.filter();
        });
    }
    filter() {
        this.apartments = this.apartmentsCache.filter(apartment => apartment.street.toLowerCase().match(this.streetFilter.toLowerCase()));
    }
}