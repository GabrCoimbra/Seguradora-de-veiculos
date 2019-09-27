import { Component, OnInit } from '@angular/core';
import { faUserPlus, faClipboard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = faUserPlus;
  Clip = faClipboard;
  constructor() { }

  ngOnInit() {
  }

}
