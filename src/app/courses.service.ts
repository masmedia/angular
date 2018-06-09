
export class CoursesService {
    // Separates the component from the HTTP logic and makes this logic 
    // reusable whenever needed. 
    // This is a fake implementation of the HTTP logic which will be implemented later. 

    getCourses(){
        return [ "course1", "course2", "course3"];
    }
}