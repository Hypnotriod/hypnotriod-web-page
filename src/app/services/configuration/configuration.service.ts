import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfigurationVO } from './IConfigurations';
import { LocalizationService } from '../localization/localization.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private static readonly URL_CONFIGURATIONS_JSON: string = '/assets/config/config.json';

  public configurationVO: IConfigurationVO;

  private onComplete: (success: boolean) => void;

  constructor(private http: HttpClient, private localization: LocalizationService) { }

  public requestConfigurations(onComplete: (success: boolean) => void): void {
    this.onComplete = onComplete;
    this.http.get<IConfigurationVO>(ConfigurationService.URL_CONFIGURATIONS_JSON).subscribe(
      (data: IConfigurationVO) => this.onDataLoadingSucces(data),
      (error: any) => this.onDataLoadingError(error));
  }

  private onDataLoadingSucces(data: IConfigurationVO): void {
    this.configurationVO = data;
    this.onComplete(true);
  }

  private onDataLoadingError(error: any): void {
    console.error('Configurations loading failed!');
    this.onComplete(false);
  }
}
