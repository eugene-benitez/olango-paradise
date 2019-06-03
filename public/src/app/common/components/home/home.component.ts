import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./css/styles.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpService,
  ) { }

  ngOnInit() {
  }

}
