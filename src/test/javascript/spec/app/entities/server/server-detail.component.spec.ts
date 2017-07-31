/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { FlareClientGuiRewriteTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ServerDetailComponent } from '../../../../../../main/webapp/app/entities/server/server-detail.component';
import { ServerService } from '../../../../../../main/webapp/app/entities/server/server.service';
import { Server } from '../../../../../../main/webapp/app/entities/server/server.model';

describe('Component Tests', () => {

    describe('Server Management Detail Component', () => {
        let comp: ServerDetailComponent;
        let fixture: ComponentFixture<ServerDetailComponent>;
        let service: ServerService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [FlareClientGuiRewriteTestModule],
                declarations: [ServerDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ServerService,
                    JhiEventManager
                ]
            }).overrideTemplate(ServerDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ServerDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ServerService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Server('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.server).toEqual(jasmine.objectContaining({id: 'aaa'}));
            });
        });
    });

});
