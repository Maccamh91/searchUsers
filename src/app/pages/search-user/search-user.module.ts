import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [SearchUserComponent],
  entryComponents: [SearchUserComponent],
  imports: [
    CommonModule,

    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    
    FormsModule,
    ReactiveFormsModule,
    
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,

  ],
  exports: [SearchUserComponent]
})
export class SearchUserModule { }
