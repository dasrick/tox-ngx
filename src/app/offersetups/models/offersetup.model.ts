import { TimePeriodModel } from './time-period.model';

export class OffersetupModel {
  id: string;
  regionId: string;
  title = '';
  timePeriod: TimePeriodModel;
  passengers: Array<number> = [];
}
