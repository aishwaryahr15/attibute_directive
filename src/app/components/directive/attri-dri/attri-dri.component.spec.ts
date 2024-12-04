import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttriDriComponent } from './attri-dri.component';

describe('AttriDriComponent', () => {
  let component: AttriDriComponent;
  let fixture: ComponentFixture<AttriDriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttriDriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttriDriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
