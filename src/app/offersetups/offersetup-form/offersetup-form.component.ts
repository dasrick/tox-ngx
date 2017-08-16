import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';

// import {fadeInAnimation} from '../../route.animation';

import { OffersetupsService } from '../offersetups.service';
import { OffersetupModel } from '../models';

@Component({
  selector: 'tox-offersetup-form',
  templateUrl: './offersetup-form.component.html',
  // host: {
  //   '[@fadeInAnimation]': 'true'
  // },
  // animations: [fadeInAnimation],
  providers: [OffersetupsService]
})
export class OffersetupFormComponent implements OnInit, AfterViewInit {

  offersetupForm: FormGroup = new FormGroup({});

  offersetup: OffersetupModel;

  offersetupFields: FormlyFieldConfig = [{
    // className: 'row',
    fieldGroup: [
      {
        // className: 'col-md-6',
        key: 'title',
        type: 'input',
        templateOptions: {
          // type: 'number',
          label: 'Title',
          placeholder: ''
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
      },
      {
        // className: 'col-md-6',
        key: 'regionId',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: 'Region ID',
          placeholder: ''
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
      },
      // {
      //   // className: 'col-md-6',
      //   key: 'startDate',
      //   type: 'input',
      //   model: this.offersetup.timePeriod,
      //   templateOptions: {
      //     type: 'date',
      //     label: 'Start date',
      //     placeholder: ''
      //   },
      //   validators: {
      //     validation: Validators.compose([Validators.required])
      //   }
      // },
      // {
      //   // className: 'col-md-6',
      //   key: 'endDate',
      //   type: 'input',
      //   model: this.offersetup.timePeriod,
      //   templateOptions: {
      //     type: 'date',
      //     label: 'End date',
      //     placeholder: ''
      //   },
      //   validators: {
      //     validation: Validators.compose([Validators.required])
      //   }
      // },
      // {
      //   // className: 'col-md-6',
      //   key: 'duration',
      //   type: 'input',
      //   model: this.offersetup.timePeriod,
      //   templateOptions: {
      //     // type: 'date',
      //     label: 'Duration',
      //     placeholder: ''
      //   },
      //   // validators: {
      //   //   validation: Validators.compose([Validators.required])
      //   // }
      // },


      // {
      //   // className: 'col-md-6',
      //   key: 'email',
      //   type: 'input',
      //   templateOptions: {
      //     type: 'email',
      //     label: 'Email address',
      //     placeholder: 'Enter email'
      //   },
      //   validators: {
      //     validation: Validators.compose([Validators.required])
      //   }
      // },
      // {
      //   // className: 'col-md-6',
      //   key: 'password',
      //   type: 'input',
      //   templateOptions: {
      //     type: 'password',
      //     label: 'Password',
      //     placeholder: 'Password',
      //     pattern: ''
      //   },
      //   validators: {
      //     validation: Validators.compose([Validators.required])
      //   }
      // }
    ]
  }];

  // user = {
  //   email: 'email@gmail.com',
  //   checked: false
  // };




  constructor(private offersetupsService: OffersetupsService) {
  }

  ngOnInit() {
    // this.offersetupsService.getAll()
    //   .subscribe(data => this.offersetups = data);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }


  submit(user) {
    console.log(user);
  }
}
