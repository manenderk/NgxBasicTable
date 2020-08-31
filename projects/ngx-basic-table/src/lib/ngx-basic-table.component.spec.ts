import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBasicTableComponent } from './ngx-basic-table.component';

describe('NgxBasicTableComponent', () => {
  let component: NgxBasicTableComponent;
  let fixture: ComponentFixture<NgxBasicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBasicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
