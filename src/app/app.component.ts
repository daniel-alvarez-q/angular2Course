import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CourseProject';

  viewSection:number = 0;

  onNavigate(feature:number){
    this.viewSection = feature;
  }
}
