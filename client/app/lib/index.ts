import * as lib from './';

import {ModuleWithProviders, NgModule} from '@angular/core';

export * from './pipes/breakable';
export * from './pipes/ellipsize';
export * from './pipes/jsonify';

const DECLARATIONS = [
  lib.BreakablePipe,
  lib.EllipsizePipe,
  lib.JSONifyPipe
];

@NgModule({

  declarations: [
    ...DECLARATIONS
  ],

  exports: [
    ...DECLARATIONS
  ]

})

export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: []
    };
  }
}
