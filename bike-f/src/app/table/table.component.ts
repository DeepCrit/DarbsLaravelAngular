import { Component, Input } from '@angular/core';
import { IRentals } from '../interfaces/ireservations';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
@Input() tableData:IRentals[] | undefined | null;
// @Input() tableData:IRentals | undefined;


}
