import { Component } from '@angular/core';
import { Connect } from 'uport-connect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  connect = new Connect('uSocial', {
    network: 'rinkeby',
    accountType: 'general',
  });

  async requestDisclosure() {
    const disclosure = {
      requested: ['name', 'avatar', 'email'],
      notifications: true,
      verified: ['usocialIdentity'],
    };
    const disclosureId = 'disclosureReq';

    this.connect.requestDisclosure(disclosure, disclosureId);

    const data = await this.connect.onResponse(disclosureId);
    console.info(data);
  }
}
