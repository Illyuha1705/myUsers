import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [TranslateModule],
})
export class PageNotFoundModule {}
