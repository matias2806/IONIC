import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LindaPage } from './linda.page';

describe('LindaPage', () => {
  let component: LindaPage;
  let fixture: ComponentFixture<LindaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LindaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LindaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
