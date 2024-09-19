import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaterialPaginatorComponent } from './ngx-material-paginator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    NgxMaterialPaginatorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    NgxMaterialPaginatorComponent
  ]
})
export class NgxMaterialPaginatorModule { }
