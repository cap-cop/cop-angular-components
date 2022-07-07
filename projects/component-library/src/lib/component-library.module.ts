import { NgModule } from '@angular/core';
import { ComponentLibraryComponent } from './component-library.component';
import { defineCustomElements } from '../cop-stencil-components/loader'
import {MyComponent} from "./stencil-generated/components";
import {DIRECTIVES} from "./stencil-generated";

defineCustomElements(window);

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class ComponentLibraryModule { }
