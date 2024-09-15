import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-material-paginator',
  templateUrl: './ngx-material-paginator.component.html',
  styleUrl: './ngx-material-paginator.component.scss'
})
export class NgxMaterialPaginatorComponent {

  _defConfigData = {
    curpage: 1,
    perPage: 10,
    totalRecords: 100
  }

  totPageCount: number = 0;

  @Input({ required: true })
  set configData(val: any) {
    this._defConfigData = { ...this._defConfigData, ...val };
    this.totPageCount = Math.ceil(this._defConfigData.totalRecords / this._defConfigData.perPage);
  }

  ngOnInit() {
    console.log(this.totPageCount);
  }

}
