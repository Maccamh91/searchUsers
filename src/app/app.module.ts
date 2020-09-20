import { UserRepoModule } from './utils/user-repo/user-repo.module';
import { UserCardModule } from './utils/user-card/user-card.module';
import { UserDetailsModule } from './pages/user-details/user-details.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchUserService } from './services/search-users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { SearchUserModule } from './pages/search-user/search-user.module';
import { UserDetailModule } from './utils/user-detail/user-detail.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    
    FormsModule,
    ReactiveFormsModule,
    
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,

    SearchUserModule,
    UserDetailsModule,
    UserCardModule,
    UserRepoModule,
    UserDetailModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [SearchUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
