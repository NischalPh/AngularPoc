## Directives in Angular

Directives in angular helps to customize the behaviour of html elements.

1. Attribute Directives ([]):
 In angular attribute directives are used to manipulate the behaviour and appreance of DOM elements. They are used to add, remove and modify the attribute of HTML elements.

Example: 
ngClass (The ngClass directive in Angular is used to add or remove CSS classes dynamically based on the expressions evaluated in the template. <div [ngClass]="{'my-class': true, 'other-class': false}">Hello World</div>),
 ngStyle (They are used to add inline css properties to the attributes of html elements like color, background color etc), 
 ngModel (Used for two way data binding, from component to html and html to component dynamically), 
 

2. Structural Directives (*):
 Structural directives are used to modify the structure of the DOM by adding, removing, or manipulating elements. Structural directives are identified by an asterisk (*) prefix before the directive name.
 Some of the most commonly used structural directives in Angular are:

ngIf directive
ngFor directive
ngSwitch directive

ngSwitch example: 
//This code goes into the typescript file
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
color = 'red';

}

<div [ngSwitch]="color">
  <p *ngSwitchCase="'red'">The color is red.</p>
  <p *ngSwitchCase="'blue'">The color is blue.</p>
  <p *ngSwitchCase="'green'">The color is green.</p>
  <p *ngSwitchDefault>The color is unknown.</p>
</div>


## Custom Directives in angular

In angular we can create our own directive to extend the behaviour of html elements.

## @Directive decorator is used at the top of the class to make a directive.
## 'selector' property is used inside the @Directive decorator which denoted the name which should be used to use this directive. 

## We can add behaviour to the directive by using @HostListener to listen to the events in the host element.
## Use @HostBinding to bind the html element attributes of the host.

Example:
import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

<p appHighlight>Hover over me to highlight!</p>