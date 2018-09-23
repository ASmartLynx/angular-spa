import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApartmentsService} from '../services/apartments.service';

@Component ({
    selector: 'apartment',
    templateUrl: './apartment.component.html',
    styleUrls: ['./apartment.component.css']
})

export class Apartment implements OnInit {
    apartment;
    constructor (private route: ActivatedRoute, private apartmentsService: ApartmentsService) {}
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let id = params.get('id');
            this.setApartment(+id);
        });
    }
    setApartment(id: number) {
        this.apartmentsService.getApartments().subscribe((data:any[]) => {
            this.apartment = data.find(apartment => apartment.id === id);
        });
    }
}