

Pipes in Angular are a feature that allow you to transform data in your application before displaying it to the user.

Pipes are used to format, filter, and sort data and they can be used with both template-driven and reactive forms, as well as with other Angular components and services.

There are two types of pipes in angular
 1. Pure pipes. (Don't have any internal state which could affect the output. Will be called only once if the input data hasnot changed.)
 Example:
  @Pipe({
  name: 'myPurePipe',
  pure: true
})
 
2. Impure pipes.

## Build in angular pipes.
Examples:  Currency pipe,  Date Pipe, Json Pipe, LowerCase Pipe, UpperCase Pipe, PercentPipe, SlicePipe, AsyncPipe

## Custom Pipes 
You can create custom pipes in Angular by defining a new class and implementing the PipeTransform interface. The PipeTransform interface contains a single method called transform that takes an input value and returns the transformed value.

To use a custom pipe in the template, you should add the pipe name after the | character and any arguments after a colon (:).

## Example: custom.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'filterByLength'})
export class CustomPipe implements PipeTransform {
  transform(values: string[], minLength: number): string[] {
    return values.filter(value => value.length >= minLength);
  }
}

In the above example, we define a CustomPipe class that implements the PipeTransform interface. The transform() method takes two arguments - an array of strings and a minimum length. It then filters out any strings in the array that are greater than or equal to the specified length.

We then decorate the class with the @Pipe decorator and provide a name property to give the pipe a name. The name is what we'll use to reference the pipe in our templates.

## app.module.ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CustomPipe } from "./custom.pipe";
import { AppComponent } from "./app.component";
@NgModule({
  declarations: [AppComponent, CustomPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


## app.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: './app.component.html'
})
export class AppComponent {
  values: string[] = ['apple', 'banana', 'carrot', 'date'];
}

<h2>Using Custom Pipe</h2>
    <ul>
      <li *ngFor="let value of values | filterByLength: 5">{{ value }}</li>
    </ul>

## Chaining of Pipes
Chaining pipes in Angular involves applying multiple pipes in sequence to transform data in a template. You can chain pipes by using the pipe operator (|) multiple times, with each pipe representing a separate transformation.

For example, suppose you have a date string that you want to format and then convert to uppercase. You could chain the date and uppercase pipes like this:

{{ myDate | date:'medium' | uppercase }}


## Best Practices to use Pipes:
1. Use built in pipes whenever possible.
2. Avoid chanining of too many pipes. To avoid this we can move the transformation logics in custom pipes or consider transforming    data in component before passing it to the template.
