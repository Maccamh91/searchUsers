import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserModule,
    RouterModule,

    MatCardModule,
  ],
  exports: [UserCardComponent]
})
export class UserCardModule { }
