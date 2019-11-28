import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  private params: any;

  agInit(params: any): void {
      this.params = params;
  }

  constructor() { }

  ngOnInit() {
  }

}
