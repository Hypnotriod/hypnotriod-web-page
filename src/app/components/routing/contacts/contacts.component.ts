import { Component, OnInit } from '@angular/core';
import { IContactVO, IConfigurationVO } from '../../../services/configuration/IConfigurations';
import { ConfigurationService } from '../../../services/configuration/configuration.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts: Array<IContactVO> = [];

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.contacts = this.configurationService.configurationVO.contacts;
  }

}
