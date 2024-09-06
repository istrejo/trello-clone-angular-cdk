import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: string = 'primary';

  constructor() {}

  ngOnInit(): void {}

  get colors() {
    return {
      'bg-success-600': this.color === 'success',
      'hover:bg-success-700': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-600': this.color === 'primary',
      'hover:bg-primary-700': this.color === 'primary',
      'focus:ring-primay-300': this.color === 'primary',
      'bg-red-600': this.color === 'red',
      'hover:bg-red-700': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
      'bg-sky-600': this.color === 'sky',
      'hover:bg-sky-700': this.color === 'sky',
      'focus:ring-sky-300': this.color === 'sky',
    };
  }
}
