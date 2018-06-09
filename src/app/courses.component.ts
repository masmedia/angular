import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
            <button (click)="onSave()">Save</button>
        `
})

export class CoursesComponent {
    onSave(){
        console.log("Button was clicked.");
    }    
}   