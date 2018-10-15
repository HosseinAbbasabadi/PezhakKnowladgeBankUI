import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent implements AfterViewChecked {
  title = 'My First Angular App';

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  constructor(private cdRef:ChangeDetectorRef) {
  }


}
