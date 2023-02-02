import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { buttonItems } from 'src/app/data/buttons.data';
import { Toggle } from './types/toggle.type';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})

export class ToggleComponent {
  buttonDatas: Array<Toggle> = buttonItems;
  isOpen: boolean = false;
  public params!: {[key: string]: string}

  @Input() toggles!: Array<Toggle>;
  @Input() newFilterBtnActive!: string;
  @Output() btnFilterValue = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.params = this.route.snapshot.queryParams;
  }

  public changed(value: string) {
    this.btnFilterValue.emit(value);
  }
}
