import { Component, OnInit } from '@angular/core';
import { IAudioVO } from 'src/app/services/configuration/IConfigurations';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  public audios: Array<IAudioVO>;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.audios = this.configurationService.configurationVO.audios;
  }

}
