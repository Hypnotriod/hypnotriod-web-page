import { Component, OnInit } from '@angular/core';
import { IVideoVO } from 'src/app/services/configuration/IConfigurations';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  videos: Array<IVideoVO>;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.videos = this.configurationService.configurationVO.videos;
  }

}
