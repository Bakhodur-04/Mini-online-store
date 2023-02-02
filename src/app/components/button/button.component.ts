import { Component, Input, OnInit } from '@angular/core';
import { ButtonColor, ButtonSize } from './types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() color: ButtonColor = 'default';
  @Input() size: ButtonSize = 'default';
  @Input() title: string = 'button title';
  @Input() isActive!: boolean;
  @Input() isDisabled!: boolean;
  @Input() value!: string;
  @Input() trigger: 'click' = 'click';

  constructor() { }
  

  ngOnInit(): void {
  }

}

