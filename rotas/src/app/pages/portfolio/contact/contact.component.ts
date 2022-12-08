import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {
    //http://localhost:4200/contact/{1}
    activateRoute.params.subscribe((result) => console.log(result));
  }

  ngOnInit(): void {}
}
