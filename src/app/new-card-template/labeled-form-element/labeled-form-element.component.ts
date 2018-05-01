import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-form-element',
  templateUrl: './labeled-form-element.component.html',
  styleUrls: ['./labeled-form-element.component.scss']
})
export class LabeledFormElementComponent implements OnInit {
  // common value
  @Input() id: string;
  @Input() title: string;
  @Input() name: string;
  @Input() elementName: string;
  // specific for <input>
  @Input() type: string;
  // specific for <select>
  @Input() options: Array<string>

  constructor() { }

  ngOnInit() {
  }

}
