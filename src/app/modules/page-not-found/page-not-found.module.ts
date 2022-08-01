import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { MoreInfoComponent } from './components/more-info-component/more-info-component';

@NgModule({
  declarations: [PageNotFoundComponent, MoreInfoComponent],
  imports: [TranslateModule],
})
export class PageNotFoundModule {}
