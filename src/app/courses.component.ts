import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
            <h2>{{ title }}</h2>
            <img src="{{ imageUrl }}" />
            <img [src]="imageUrl" />
        `
})

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "https://www.verdict.co.uk/wp-content/uploads/2017/11/shutterstock_617032220.jpg"

    courses;

    // Dependency injection
    constructor( service: CoursesService ){        
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
 
}   