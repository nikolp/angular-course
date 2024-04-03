import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseService } from './service/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;
  

  constructor(private courseService: CourseService ) {
    this.courses$ = courseService.loadCourses();
  //  http.get("/api/courses").subscribe(res => { this.courses = res});
  }

  ngOnInit() {

  }

  saveCourse(course: Course) {
    console.log("trying to save: ", course);
    this.courseService.saveCourse(course).subscribe(() => console.log("Course saved!"));
  }



}
