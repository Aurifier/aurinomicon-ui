import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FakeInteractionsService } from '../fakeinteractions.service';
import { InteractionsService } from '../interactions.service';
import { NetworkComponent } from './network.component';

describe('NetworkComponent', () => {
  let component: NetworkComponent;
  let fixture: ComponentFixture<NetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworkComponent],
      providers: [{provide: InteractionsService, useClass: FakeInteractionsService}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a figure to hold the svg', () => {
    var actualFigure = fixture.debugElement.query(By.css('figure#network'));
    expect(actualFigure).toBeTruthy();
  });

  it('should have an svg to hold the network', () => {
    var actualFigure = fixture.debugElement.query(By.css('svg'));
    expect(actualFigure).toBeTruthy();
  });
});
