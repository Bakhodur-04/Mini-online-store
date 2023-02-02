import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent{
  public btnFilter!: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.btnFilter = this.route.snapshot.queryParams['filter']
  }

}
