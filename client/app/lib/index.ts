import * as lib from './';

import {ModuleWithProviders, NgModule} from '@angular/core';

export * from './components/no-data-on-page';
export * from './pipes/breakable';
export * from './pipes/ellipsize';
export * from './pipes/jsonify';

const DECLARATIONS = [
  lib.BreakablePipe,
  lib.EllipsizePipe,
  lib.JSONifyPipe,
  lib.NoDataOnPageComponent
];

@NgModule({

  declarations: [
    ...DECLARATIONS
  ],

  exports: [
    ...DECLARATIONS
  ]

})

export class PiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PiModule,
      providers: []
    };
  }
}
