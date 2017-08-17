import { Component, OnInit, AfterViewInit } from '@angular/core';
// import {fadeInAnimation} from '../../route.animation';

import { OffersetupsService } from '../offersetups.service';
import {OffersetupModel} from '../models';

// import {DataSource} from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'tox-offersetup-list',
  templateUrl: './offersetup-list.component.html',
  styleUrls: ['./offersetup-list.component.scss'],
  // host: {
  //   '[@fadeInAnimation]': 'true'
  // },
  // animations: [fadeInAnimation],
  providers: [OffersetupsService]
})
export class OffersetupListComponent implements OnInit, AfterViewInit {

  public offersetups: OffersetupModel[] = [];

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

  // dataSource: MyDataSource | null;
  // dataSubject = new BehaviorSubject<any[]>([]);
  // displayedColumns = [
  //   'setupId',
  //   'setupTitle',
  //   'setupRegionId',
  //   'setupStartDate',
  //   'setupEndDate',
  //   'setupDuration'
  // ];
  //
  // constructor(private offersetupsService: OffersetupsService) {
  //   this.offersetupsService.getAll().subscribe({
  //     next: value => this.dataSubject.next(value)
  //   });
  // }
  //
  // ngOnInit() {
  //   this.dataSource = new MyDataSource(this.dataSubject);
  // }
  //
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     window.dispatchEvent(new Event('resize'));
  //   }, 1000);
  // }

}

// export class MyDataSource extends DataSource<any[]> {
//
//   constructor(private subject: BehaviorSubject<any[]>) {
//     super();
//   }
//
//   connect(): Observable<any[]> {
//     return this.subject.asObservable();
//   }
//
//   disconnect(): void {
//   }
//
// }
