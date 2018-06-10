import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        `
})

export class CoursesComponent {

    email = "me@example.com"
    
    onKeyUp(){
        console.log(this.email);
    }    
}   