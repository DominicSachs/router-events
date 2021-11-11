import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(e => console.log('BreadcrumbComponent >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>: ', e));
  
    console.log(this.route);
  }

  ngOnInit(): void {
  }
}
