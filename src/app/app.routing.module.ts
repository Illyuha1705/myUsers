import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyUsersComponent } from './modules/users/components/my-users/my-users.component';
import { PageNotFoundModule } from './modules/page-not-found/page-not-found.module';
import { PageNotFoundComponent } from './modules/page-not-found/components/page-not-found-component/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-users', pathMatch: 'full' },
  { path: 'my-users', component: MyUsersComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), PageNotFoundModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
