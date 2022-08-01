import { Injectable } from '@angular/core';
import { AllChats, EditSidebar, NavigationSchemaProvider, PrivateChats } from '../models/navigation-schema.model';
import { MenuItem } from '../models/navigation.model';
import { values } from 'lodash';

@Injectable()
export class NavigationSchemaService implements NavigationSchemaProvider {
  private navigationSchema = {
    allChats: {
      link: AllChats,
    },
    privateChats: {
      link: PrivateChats,
    },
    editLinkSchema: {
      link: EditSidebar,
    },
  };

  getSchema(): MenuItem[] {
    return values(this.navigationSchema);
  }
}
