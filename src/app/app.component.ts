import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid-community';
import { SpecializationComponent } from './specialization/specialization.component';
import { EquipmentComponent } from './equipment/equipment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private gridOptions: GridOptions;
  title = 'ag-grid-cli';

  constructor() {
    this.gridOptions = {} as GridOptions;
    this.gridOptions.animateRows = true;
    this.gridOptions.gridAutoHeight = true;
    this.gridOptions.columnDefs = [
        {
            headerName: 'Name',
            field: 'name',
            sort: 'asc',
            sortable: true,
            autoHeight : true,
            width: 300
        },
        {
            headerName: 'Specialization',
            field: 'specialization',
            cellRenderer: this.customCellRendererMethod,
            autoHeight : true,
            // cellRendererFramework: SpecializationComponent,
            width: 300
        },
        {
            headerName: 'Equipment',
            field: 'equipment',
            autoHeight : true,
            cellRenderer: this.customCellRendererMethod,
            // cellRendererFramework: EquipmentComponent,
            width: 300
        },
    ];

    this.gridOptions.rowData = [
      {
        name: 'Studio A',
        specialization: 'Orchestra <br> Choirs <br> Bands',
        equipment: '3 Iso Booths <br> SSL Console'
      },
      {
        name: 'Studio B',
        specialization: 'Video Game Sound <br> ADR',
        equipment: 'Digidesign 8 Channel D'
      },
      {
        name: 'Studio C',
        specialization: 'Mixing <br> Mastering <br> Recording Vocals',
        equipment: 'Digidesign 8 Channel D <br> Dynaudio <br> Meyrs'
      }
    ];
}


public customCellRendererMethod(param): string {
  return param.value;
}



}
