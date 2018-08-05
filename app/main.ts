//creates bridge between angular framework and custom code
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";// root angular module

platformBrowserDynamic().bootstrapModule(AppModule);