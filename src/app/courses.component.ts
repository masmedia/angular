import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
            <input (keyup.enter)="onKeyUp()" />
        `
})

export class CoursesComponent {
    
    onKeyUp(){
        console.log("ENTER was pressed.");
    }    
}   