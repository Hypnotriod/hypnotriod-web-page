import { Injectable } from '@angular/core';
import { LocalizationService } from '../localization/localization.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { ILocale } from '../configuration/IConfigurations';

@Injectable({
  providedIn: 'root'
})
export class InitializationService {

  constructor(private configurationService: ConfigurationService, private localization: LocalizationService) { }

  public init(): Promise<(resolve, reject) => void> {
    return new Promise((resolve, reject) => {
      this.configurationService.requestConfigurations((configurationsLoadSuccess: boolean) => {
        if (configurationsLoadSuccess) {
          const locale: ILocale = this.configurationService.configurationVO.locale;
          const language: string =
            locale.supportedLanguages.indexOf(this.localization.userLanguage) !== -1 ?
              this.localization.userLanguage : locale.defaultLanguage;
          this.localization.requestLocalizations(language, (localizationsLoadSuccess: boolean) => {
            resolve();
          });
        } else {
          resolve();
        }
      });
    });
  }
}
