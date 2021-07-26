import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { IConfigurationVO, IHeaderIconVO } from '../../services/configuration/IConfigurations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerIcons: Array<IHeaderIconVO> = [];

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.headerIcons = this.configurationService.configurationVO.headerIcons;
  }

}
