import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-input',
  templateUrl: './labeled-input.component.html',
  styleUrls: ['./labeled-input.component.scss']
})
export class LabeledInputComponent implements OnInit {

  @Input() title: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
