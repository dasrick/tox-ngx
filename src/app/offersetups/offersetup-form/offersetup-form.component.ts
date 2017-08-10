import { Component, OnInit, AfterViewInit } from '@angular/core';
// import {fadeInAnimation} from '../../route.animation';

import {OffersetupsService} from '../offersetups.service';
import {OffersetupModel} from '../models';

@Component({
  selector: 'tox-offersetup-form',
  templateUrl: './offersetup-form.component.html',
  styleUrls: ['./offersetup-form.component.scss'],
  // host: {
  //   '[@fadeInAnimation]': 'true'
  // },
  // animations: [fadeInAnimation],
  providers: [OffersetupsService]
})
export class OffersetupFormComponent implements OnInit, AfterViewInit {

  private offersetups: OffersetupModel[] = [];

  constructor(private offersetupsService: OffersetupsService) {
  }

  ngOnInit() {
    this.offersetupsService.getAll()
      .subscribe(data => this.offersetups = data);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }

}
