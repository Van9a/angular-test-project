import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 @Output() selectedValue = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(value: string) {
    console.log(value, 'value');
    this.selectedValue.emit(value);
  }

}
