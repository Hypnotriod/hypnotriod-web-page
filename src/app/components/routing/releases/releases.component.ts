import { Component, OnInit } from '@angular/core';
import { IReleaseVO } from 'src/app/services/configuration/IConfigurations';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { LocalizationService } from 'src/app/services/localization/localization.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {

  public releases: Array<IReleaseVO>;

  constructor(public localizationService: LocalizationService, private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.releases = this.configurationService.configurationVO.releases;
  }

}
