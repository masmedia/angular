import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
        `
})

export class CoursesComponent {
    onDivClicked(){
        console.log("Div was clicked.");
    }
    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked.", $event);
    }    
}   