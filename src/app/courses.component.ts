import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
           {{ course.title | lowercase | uppercase }} <br/>
           {{ course.rating | number:'2.1-5' }} <br/>
           {{ course.students | number }} <br/>
           {{ course.price | currency:'TRY':true:'2.1-3' }} <br/>
           {{ course.releaseDate | date:'shortDate'}} <br/>
           {{ course.discountRate | percent }}
        `
})

export class CoursesComponent {

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1),
        discountRate: 0.0397
    }        
}   