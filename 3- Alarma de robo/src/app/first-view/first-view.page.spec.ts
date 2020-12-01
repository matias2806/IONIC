import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstViewPage } from './first-view.page';

describe('FirstViewPage', () => {
  let component: FirstViewPage;
  let fixture: ComponentFixture<FirstViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
