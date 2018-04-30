import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-add-new-plant-button',
  templateUrl: './add-new-plant-button.component.html',
  styleUrls: ['./add-new-plant-button.component.scss']
})
export class AddNewPlantButtonComponent implements OnInit {

  constructor( private electronService: ElectronService ) { }

  openWindow() {
    this.electronService.ipcRenderer.send('open-add-new-card-window');
  };

  ngOnInit() {
  }

}
