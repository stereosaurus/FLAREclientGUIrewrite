import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlareClientGuiRewriteSharedModule } from '../../shared';
import {
    ServerService,
    ServerPopupService,
    ServerComponent,
    ServerDetailComponent,
    ServerDialogComponent,
    ServerPopupComponent,
    ServerDeletePopupComponent,
    ServerDeleteDialogComponent,
    serverRoute,
    serverPopupRoute,
    ServerResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...serverRoute,
    ...serverPopupRoute,
];

@NgModule({
    imports: [
        FlareClientGuiRewriteSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ServerComponent,
        ServerDetailComponent,
        ServerDialogComponent,
        ServerDeleteDialogComponent,
        ServerPopupComponent,
        ServerDeletePopupComponent,
    ],
    entryComponents: [
        ServerComponent,
        ServerDialogComponent,
        ServerPopupComponent,
        ServerDeleteDialogComponent,
        ServerDeletePopupComponent,
    ],
    providers: [
        ServerService,
        ServerPopupService,
        ServerResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlareClientGuiRewriteServerModule {}
