import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  address;

  constructor(private _translateService: TranslateService) {
    _translateService.addLangs(['sk', 'en']);
    _translateService.setDefaultLang('en');

    // const browserLang = this._translateService.getBrowserLang();
    _translateService.use('en');

    _translateService.get('test').subscribe(
      result => console.log('translation of test', result)
    );
  }
}
