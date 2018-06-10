import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
            <input (keyup.enter)="onKeyUp($event)" />
        `
})

export class CoursesComponent {
    
    onKeyUp($event){
        console.log($event.target.value);
    }    
}   