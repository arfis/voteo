import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PageSkeletComponent} from './pages/page-skelet/page-skelet.component';
import {PoolActionsComponent} from './components/pool-actions/pool-actions.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: PageSkeletComponent,
    children: [
      {
        path: '',
        component: PoolActionsComponent,
      }
    ]
    // data: { title: 'Heroes List' }
  },
  { path: '**', component: PageNotFoundComponent }
];
