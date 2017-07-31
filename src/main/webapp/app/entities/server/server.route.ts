import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ServerComponent } from './server.component';
import { ServerDetailComponent } from './server-detail.component';
import { ServerPopupComponent } from './server-dialog.component';
import { ServerDeletePopupComponent } from './server-delete-dialog.component';

@Injectable()
export class ServerResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const serverRoute: Routes = [
    {
        path: 'server',
        component: ServerComponent,
        resolve: {
            'pagingParams': ServerResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servers'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'server/:id',
        component: ServerDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servers'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const serverPopupRoute: Routes = [
    {
        path: 'server-new',
        component: ServerPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servers'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'server/:id/edit',
        component: ServerPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servers'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'server/:id/delete',
        component: ServerDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Servers'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
