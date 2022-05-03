import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyUsersModule } from './components/my-users/my-users.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [MyUsersModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
