import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({ providedIn: 'root'})
export class CourseService {

  constructor(private http: HttpClient) { 
    console.log("CourseService constructor");
  }

  loadCourses() : Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses");
  }

  saveCourse(course: Course) {
    return this.http.put(`/api/courses/${course.id}`, course);
  } 
}
