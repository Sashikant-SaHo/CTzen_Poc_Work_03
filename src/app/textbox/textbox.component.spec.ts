import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxComponent } from './textbox.component';

describe('TextboxComponent', () => {
  let component: TextboxComponent;
  let fixture: ComponentFixture<TextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('DragDrop Event', () => {

   let Dbg = fixture.debugElement;
      let htE = Dbg.nativeElement.querySelector(".dragContainer");

      htE.addEventListener('CdkDragDrop', (event:any) => {
        component.onDrop(event);
         expect(component).toBeNull();
  });
      });
});
