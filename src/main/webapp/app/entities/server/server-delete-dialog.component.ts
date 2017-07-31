import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Server } from './server.model';
import { ServerPopupService } from './server-popup.service';
import { ServerService } from './server.service';

@Component({
    selector: 'jhi-server-delete-dialog',
    templateUrl: './server-delete-dialog.component.html'
})
export class ServerDeleteDialogComponent {

    server: Server;

    constructor(
        private serverService: ServerService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: string) {
        this.serverService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'serverListModification',
                content: 'Deleted an server'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-server-delete-popup',
    template: ''
})
export class ServerDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private serverPopupService: ServerPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.serverPopupService
                .open(ServerDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
