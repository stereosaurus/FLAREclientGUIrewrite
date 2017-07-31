import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Server } from './server.model';
import { ServerPopupService } from './server-popup.service';
import { ServerService } from './server.service';

@Component({
    selector: 'jhi-server-dialog',
    templateUrl: './server-dialog.component.html'
})
export class ServerDialogComponent implements OnInit {

    server: Server;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private serverService: ServerService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.server.id !== undefined) {
            this.subscribeToSaveResponse(
                this.serverService.update(this.server));
        } else {
            this.subscribeToSaveResponse(
                this.serverService.create(this.server));
        }
    }

    private subscribeToSaveResponse(result: Observable<Server>) {
        result.subscribe((res: Server) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Server) {
        this.eventManager.broadcast({ name: 'serverListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-server-popup',
    template: ''
})
export class ServerPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private serverPopupService: ServerPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.serverPopupService
                    .open(ServerDialogComponent as Component, params['id']);
            } else {
                this.serverPopupService
                    .open(ServerDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
