import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimeraPaginaPage } from './primera-pagina.page';

describe('PrimeraPaginaPage', () => {
  let component: PrimeraPaginaPage;
  let fixture: ComponentFixture<PrimeraPaginaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeraPaginaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeraPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
