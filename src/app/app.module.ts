import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './Component/main/main.component';
import { HeaderComponent } from './Component/header/header.component';
import { CalculatorComponent } from './Component/calculator/calculator.component';
import { FeatureBoxComponent } from './Component/feature-box/feature-box.component';
import { ToggleComponent } from './Component/toggle/toggle.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CalculatorComponent,
    FeatureBoxComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
