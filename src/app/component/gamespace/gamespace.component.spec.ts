import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamespaceComponent } from './gamespace.component';

describe('GamespaceComponent', () => {
  let component: GamespaceComponent;
  let fixture: ComponentFixture<GamespaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamespaceComponent]
    });
    fixture = TestBed.createComponent(GamespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
