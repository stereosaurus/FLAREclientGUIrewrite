import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager  } from 'ng-jhipster';

import { Server } from './server.model';
import { ServerService } from './server.service';

@Component({
    selector: 'jhi-server-detail',
    templateUrl: './server-detail.component.html'
})
export class ServerDetailComponent implements OnInit, OnDestroy {

    server: Server;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private serverService: ServerService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInServers();
    }

    load(id) {
        this.serverService.find(id).subscribe((server) => {
            this.server = server;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInServers() {
        this.eventSubscriber = this.eventManager.subscribe(
            'serverListModification',
            (response) => this.load(this.server.id)
        );
    }
}
