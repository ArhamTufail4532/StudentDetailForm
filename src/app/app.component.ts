import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentDetailForm';
}
