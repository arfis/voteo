import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { PageSkeletComponent } from './pages/page-skelet/page-skelet.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './components/profile/profile.component';
import { PoolActionsComponent } from './components/pool-actions/pool-actions.component';
import { PoolActionElementComponent } from './components/pool-action-element/pool-action-element.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewQuestionPageComponent } from './pages/new-question-page/new-question-page.component';
import {MatButtonModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PoolSummaryComponent } from './components/pool-summary/pool-summary.component';
import { CreatePoolProcessPageComponent } from './pages/create-pool-process-page/create-pool-process-page.component';
import { SplashScreenPageComponent } from './pages/splash-screen-page/splash-screen-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { PoolsPageComponent } from './pages/pools-page/pools-page.component';
import { PoolTileComponent } from './components/pool-tile/pool-tile.component';
import { PublicPoolsPageComponent } from './pages/public-pools-page/public-pools-page.component';
import { PoolFillPageComponent } from './pages/pool-fill-page/pool-fill-page.component';
import { PoolComponent } from './components/pool/pool.component';

export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PageSkeletComponent,
    HomePageComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ProfileComponent,
    PoolActionsComponent,
    PoolActionElementComponent,
    NewQuestionPageComponent,
    PoolSummaryComponent,
    CreatePoolProcessPageComponent,
    SplashScreenPageComponent,
    ContactListPageComponent,
    PoolsPageComponent,
    PoolTileComponent,
    PublicPoolsPageComponent,
    PoolFillPageComponent,
    PoolComponent
  ],
  imports: [
    NgbModule.forRoot(),
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
