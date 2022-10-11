import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorTimeComponent } from './mostrador-time.component';

describe('MostradorTimeComponent', () => {
  let component: MostradorTimeComponent;
  let fixture: ComponentFixture<MostradorTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostradorTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostradorTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
