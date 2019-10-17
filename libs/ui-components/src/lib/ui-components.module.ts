import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UeberhauptComponent } from './ueberhaupt/ueberhaupt.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UeberhauptComponent],
  exports: [UeberhauptComponent]
})
export class UiComponentsModule {}
