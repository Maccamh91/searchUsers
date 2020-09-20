import { UserRepoModule } from './../../utils/user-repo/user-repo.module';
import { UserCardModule } from './../../utils/user-card/user-card.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    
    UserCardModule,
    UserRepoModule,

    AppRoutingModule,


    RouterModule,
    MatDividerModule,

  ],
})
export class UserDetailsModule { }
