import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterEscortSharedModule, UserRouteAccessService } from './shared';
import { JhipsterEscortAppRoutingModule} from './app-routing.module';
import { JhipsterEscortHomeModule } from './home/home.module';
import { JhipsterEscortAdminModule } from './admin/admin.module';
import { JhipsterEscortAccountModule } from './account/account.module';
import { JhipsterEscortEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterEscortAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterEscortSharedModule,
        JhipsterEscortHomeModule,
        JhipsterEscortAdminModule,
        JhipsterEscortAccountModule,
        JhipsterEscortEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterEscortAppModule {}
