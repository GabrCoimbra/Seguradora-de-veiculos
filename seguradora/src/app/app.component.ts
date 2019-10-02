import { Component } from '@angular/core';
import { faHome, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seguradora';
  home = faHome;
  add = faPlusCircle;
}
