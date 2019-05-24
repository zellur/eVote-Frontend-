import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    NgbModule,
    DropdownDirective,
    FormsModule
  ],
  providers: []
})
export class SharedModule { }
