import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {}
  onClick() {
    this.close.emit();
  }
}
