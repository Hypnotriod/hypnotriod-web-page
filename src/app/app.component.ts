import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ConfigurationService } from './services/configuration/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hypnotriod';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.document.body.classList.remove('loading');
  }
}
