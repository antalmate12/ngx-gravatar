import { NgModule, ModuleWithProviders } from '@angular/core';

import { GravatarConfig } from './gravatar-config';
import { GRAVATAR_CONFIG_TOKEN } from './gravatar-config.token';
import { NgxGravatarDirective } from './ngx-gravatar.directive';

@NgModule({
  declarations: [NgxGravatarDirective],
  exports: [NgxGravatarDirective],
})
export class GravatarModule {
  static forRoot(
    gravatarConfig: GravatarConfig
  ): ModuleWithProviders<GravatarModule> {
    return {
      ngModule: GravatarModule,
      providers: [
        {
          provide: GRAVATAR_CONFIG_TOKEN,
          useValue: gravatarConfig,
        },
      ],
    };
  }
}
