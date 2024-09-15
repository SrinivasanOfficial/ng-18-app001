import { NgModule } from '@angular/core';
import { NgxMaterialPaginatorComponent } from './ngx-material-paginator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    NgxMaterialPaginatorComponent
  ],
  imports: [
    MatButtonModule, MatDividerModule, MatIconModule
  ],
  exports: [
    NgxMaterialPaginatorComponent
  ]
})
export class NgxMaterialPaginatorModule { }
