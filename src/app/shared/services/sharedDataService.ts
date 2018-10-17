import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class SharedDataService {
  private data = new Subject<any>();

  sharedData = this.data.asObservable();

  set(data: any) {
    this.data.next(data);
  }

  get() {
    return this.data;
  }
}
