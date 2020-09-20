import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepoComponent } from './user-repo.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [UserRepoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatListModule,
    FlexLayoutModule
  ],
  exports: [UserRepoComponent]
})
export class UserRepoModule { }
