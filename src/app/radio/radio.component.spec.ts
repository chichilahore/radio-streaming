import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioComponent } from './radio.component';
import { By } from '@angular/platform-browser';
import { LiteralArray } from '@angular/compiler';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('it should return the string "Radio singular"', () => {
    it('it should return the string "Radio singular', () => {
      expect(component.title).toBe("Radio Singular")
    });    
  });
  describe('it should return h1 component as the same title of the component', () => {
    it('it should return h1 component as the same title of the component', () => {
      
      const title = fixture.nativeElement.querySelector('h1').textContent;
      expect(title).toBe("Radio Singular");
    });
  });
  describe('it should return the radio station by name', () => {
    it('it should show the placeholder as the value "Escribe el nombre de tu emisora aquí"', () => {
      
      const placeholder = fixture.nativeElement.querySelector('input').placeholder;
      expect(placeholder).toBe(component.placeholder);
    });
  });
  describe('it should have search button with title search', () => {
    it('t should have search button with title search', () => {
      const button = fixture.nativeElement.querySelector('#searchButton')
      expect(button.textContent).toBe("Buscar");
    });
  });

    it('should the searchButton only once ', () => {
      const searchRadioSpy = jest.spyOn(component, 'searchRadio');
      const button = fixture.debugElement.query(By.css('#searchButton'));
      button.triggerEventHandler('click', null);
      expect(searchRadioSpy).toHaveBeenCalledTimes(1);
    });

  describe('Radio Station List', () => {
    it('should exist a radio station list', () => {
      const radioStationList = fixture.nativeElement.querySelector('ul')
      console.log(radioStationList);
      expect(radioStationList).not.toBeNull();
    });

    it('radio station list should inicialize void', () => {
      const liArray = fixture.nativeElement.querySelector('li');
      expect(liArray.length).toBe(0) 
    })

    
    it('should return at list one result if a succesful search is done', () => {
      component.filterArray=[{
        name: "Test",
        url: "test",
        country: "test"
      }]
      const searchRadioSpy = jest.spyOn(component, 'searchRadio').mockImplementation(() => {
        component.filterArray = component.radioStation.filter((radio)=>{
          return radio.name.includes('t')
      const liArray = fixture.nativeElement.querySelectorAll('li');      
      const button = fixture.debugElement.query(By.css('button'))
      // const input = fixture.debugElement.query(By.css('#input'));
      // input.triggerEventHandler('keyup', component)
      component.inputValue="0";
      button.triggerEventHandler('click', null);
      
      fixture.detectChanges();


      expect(LiteralArray.length).toBeGreaterThan(0)

    });
   });
});