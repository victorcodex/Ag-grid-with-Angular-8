import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent implements OnInit {

  private params: any;

  agInit(params: any): void {
      this.params = params;
  }

  constructor() { }

  ngOnInit() {
  }

}
