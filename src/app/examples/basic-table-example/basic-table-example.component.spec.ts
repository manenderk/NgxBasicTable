import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTableExampleComponent } from './basic-table-example.component';

describe('BasicTableExampleComponent', () => {
  let component: BasicTableExampleComponent;
  let fixture: ComponentFixture<BasicTableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
