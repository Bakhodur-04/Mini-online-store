import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent {
  @Input() isOpen!: boolean;

  @Output() close = new EventEmitter();

  constructor(public cartService: CartServiceService) {}

  closeMenu(): void {
    this.isOpen = !this.isOpen;
    this.close.emit(this.isOpen);
  }

}
