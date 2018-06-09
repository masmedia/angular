import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
            <button class="btn btn-primary">Save</button>
        `
})

export class CoursesComponent {
    title = "List of courses";
    colSpan = 2;    
    courses;

    // Dependency injection
    constructor( service: CoursesService ){        
        this.courses = service.getCourses();
    }

}   