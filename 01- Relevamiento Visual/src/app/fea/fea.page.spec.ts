import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeaPage } from './fea.page';

describe('FeaPage', () => {
  let component: FeaPage;
  let fixture: ComponentFixture<FeaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
