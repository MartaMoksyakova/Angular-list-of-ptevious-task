import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkNavBarComponent } from './work-nav-bar.component';

describe('WorkNavBarComponent', () => {
  let component: WorkNavBarComponent;
  let fixture: ComponentFixture<WorkNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
