import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyUsersComponent } from './components/my-users/my-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-users', pathMatch: 'full' },
  { path: 'my-users', component: MyUsersComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
