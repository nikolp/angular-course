import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  getCssClasses(): object {
    return {
      'beginner': this.inpCourse.category == 'BEGINNER'
    };
  }
  myOnClick() {
     console.log('Card: Click happened. ' + this.inpCourse.category);
     this.customEvent.emit(this.inpCourse);
  }

  @Output()
  customEvent = new EventEmitter<Course>();

  @Input()
  cardIndex: number;

  @Input({required: true})
  inpCourse: Course;

}
