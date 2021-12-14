import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
//import { CommandOptions } from 'node_module/commander/typings';

import { LoginComponent } from 'src/app/component/login/login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });



  it('should contain data like jwt and data object', () => {
    component.userLogin();
    expect(component._userId).toBeGreaterThan(0);
  })

  it('should have an empty username', () => {
    //we have the button element in my variable
    expect(component._invalidUsernameMessage).toBeFalsy();
    component.removeUsername();

    //when we do something to the dom, we want to detect the changes made to the DOM
    expect(component._invalidUsernameMessage).toBeTruthy();

  })

  it('should call userLogin() when the button is clicked', ()=>{

    spyOn(component, 'userLogin');

    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    expect(component.userLogin).toHaveBeenCalled();

  })

  it('should remove the username', ()=>{
    expect(component._invalidUsernameMessage).toContain("testing");
    component.removeUsername();
    expect(component._invalidUsernameMessage).toBeFalsy();
  })
});
