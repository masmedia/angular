import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
            <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>

            </ul>
        `
})

export class CoursesComponent {
    title = "List of courses";

    courses;

    // Dependency injection
    constructor( service: CoursesService ){        
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
 
}   