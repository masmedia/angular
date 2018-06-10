import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator to make Angular understand this component (courses)
@Component({
    selector: 'courses',            // CSS Selector 
    template: `
           {{ text | summary:10 }}
        `
})

export class CoursesComponent {

    text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie fringilla eros a imperdiet. Nunc pretium hendrerit leo dapibus porta.     Vestibulum laoreet laoreet scelerisque. Phasellus a congue felis, id iaculis erat. Ut semper sem ligula, non commodo lacus finibus nec. 
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus justo ex, tincidunt ut varius id, vestibulum eu ipsum. Duis ac tortor sit amet leo condimentum cursus ac ac nunc. Aenean nec ipsum a erat scelerisque suscipit quis commodo quam. 
    `
        
            
}   