import { NgModule } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent
  ]
})
export class UselessLibModule { }
