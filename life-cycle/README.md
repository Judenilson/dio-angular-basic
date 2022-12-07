# LifeCycle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Life Cycle Hooks

1. ngOnInit()
> Executed when component is start and mounted. 

2. ngOnChanges()
> Executed when property value is changed via input().  

3. ngDoCheck()
> Executes when component properties are verify. 
## Check Events


3.1 ngAfterContentInit()
> Executed when Angular realize any content projection in its components.


3.2 ngAfterConttentChecked()
> Executed always the content of the component's content is checked by Angular's change detection engine.


3.3 ngAfterViewInit()
> Executed after a component is start totaly .


3.4 ngAfterViewChecked()
> Executed when a component visualization is verify by Angular's change detection algorithm.

## Destroy Event
4 ngOnDestroy()
> Executed after destroy a component

