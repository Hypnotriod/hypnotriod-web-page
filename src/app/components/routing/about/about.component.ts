import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../../../services/localization/localization.service';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { IAboutVO } from 'src/app/services/configuration/IConfigurations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about: IAboutVO;

  constructor(public localizationService: LocalizationService, private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.about = this.configurationService.configurationVO.about;
  }

}
