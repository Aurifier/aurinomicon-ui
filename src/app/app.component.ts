import { Component } from '@angular/core';
import { FakeInteractionsService } from './fakeinteractions.service';
import { InteractionsService } from './interactions.service';

@Component({
  selector: 'app-root',
  providers: [
    {
      provide: InteractionsService,
      useClass: FakeInteractionsService
    }
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aurinomicon-ui';
}
