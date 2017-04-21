import * as lib from './';

import {ModuleWithProviders, NgModule} from '@angular/core';

export * from './components/no-data-on-page';
export * from './pipes/breakable';
export * from './pipes/ellipsize';
export * from './pipes/jsonify';
export * from './services/env';
export * from './utils';

const DECLARATIONS = [
  lib.BreakablePipe,
  lib.EllipsizePipe,
  lib.JSONifyPipe,
  lib.NoDataOnPageComponent
];

const PROVIDERS = [
  lib.EnvService
];

@NgModule({

  declarations: [
    ...DECLARATIONS
  ],

  exports: [
    ...DECLARATIONS
  ],

  providers: [
    ...PROVIDERS
  ]

})

export class PiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PiModule,
      providers: [
        ...PROVIDERS
      ]
    };
  }
}
