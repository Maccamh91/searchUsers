import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: SearchUserComponent },
  { path: 'user-details', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
