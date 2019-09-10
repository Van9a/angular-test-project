import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  loadedValue = 'recipe';

  onNavigate(value: string) {
    this.loadedValue = value;
  }
}
