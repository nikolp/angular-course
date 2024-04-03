import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0;
  onIncrement() {
    this.count++;
  }
}
