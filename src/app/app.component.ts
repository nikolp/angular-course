import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    console.log('view initialized: ', this.coursesDiv);
  }
  courses = COURSES;

  @ViewChild(CourseCardComponent)
  theCard: CourseCardComponent;

  @ViewChild('coursesDiv')
  coursesDiv: ElementRef;

  today = new Date( );

  myOnClick(event: Course) {
    console.log('App: Click happened. ', event);
    console.log(this.theCard);
    console.log(this.coursesDiv);
  }

}
