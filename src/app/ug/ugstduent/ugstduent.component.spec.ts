import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgstduentComponent } from './ugstduent.component';

describe('UgstduentComponent', () => {
  let component: UgstduentComponent;
  let fixture: ComponentFixture<UgstduentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgstduentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgstduentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
