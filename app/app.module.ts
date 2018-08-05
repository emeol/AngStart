//This file contains the angular module
//Every project has a root angular module
//This is the root angular module.
//angular module provides the name of the root component
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ProductComponent} from "./component";

@NgModule({
    imports:[BrowserModule], //contains dependencies
    declarations:[ProductComponent], //features that app is exposed publicly
    bootstrap:[ProductComponent] //tells angular the entry point
})
export class AppModule{}