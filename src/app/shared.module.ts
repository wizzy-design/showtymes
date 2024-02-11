import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [SearchbarComponent],
})
export class SharedModule {}
