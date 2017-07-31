import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FlareClientGuiRewriteServerModule } from './server/server.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        FlareClientGuiRewriteServerModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlareClientGuiRewriteEntityModule {}
