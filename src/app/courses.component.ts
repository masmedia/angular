import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
            <button [style.backgroundColor]="isActive ? 'blue' : '#FFF8E7'">Save</button>
        `
})

export class CoursesComponent {
    title = "List of courses";
    isActive = false;  // Controls style binding
    
}   