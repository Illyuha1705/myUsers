import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyUsersModule } from './components/my-users/my-users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [MyUsersModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
