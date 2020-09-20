import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';



@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule
  ],
  exports: [UserDetailComponent]
})
export class UserDetailModule { }
