import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: '<h2>{{ getTitle() }}</h2>'    // HTML Markup
})

export class CoursesComponent {
    title = "List of courses";

    getTitle() {
        return this.title;
    }
 
}