

import {
  Component,
  OnInit,
  ViewChild,
  ViewChildDecorator,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-preregistration',
  template: `
    <p>
      preregistration works!
    </p>
  `,
  styleUrls: ['./preregistration.component.css']
})
export class PreregistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
