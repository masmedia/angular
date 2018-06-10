import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
            <input #email (keyup.enter)="onKeyUp(email.value)" />
        `
})

export class CoursesComponent {
    
    onKeyUp(email){
        console.log(email);
    }    
}   