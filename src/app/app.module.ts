import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './template-driven/demo-form-sku/demo-form-sku.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormSkuWithBuilderComponent } from './reactive-approach/demo-form-sku-with-builder/demo-form-sku-with-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
