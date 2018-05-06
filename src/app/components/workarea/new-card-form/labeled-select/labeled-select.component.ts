import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-select',
  templateUrl: './labeled-select.component.html',
  styleUrls: ['./labeled-select.component.scss']
})
export class LabeledSelectComponent implements OnInit {
  @Input() title: string;
  @Input() name: string;
  @Input() values: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
