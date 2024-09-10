import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialPaginatorComponent } from './ngx-material-paginator.component';

describe('NgxMaterialPaginatorComponent', () => {
  let component: NgxMaterialPaginatorComponent;
  let fixture: ComponentFixture<NgxMaterialPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxMaterialPaginatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMaterialPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
