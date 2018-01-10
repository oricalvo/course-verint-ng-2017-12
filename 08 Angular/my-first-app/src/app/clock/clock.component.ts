import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface TickEvent {
  time: Date;
}

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: Date;
  @Input() format: string = "HH:mm:ss";
  @Output() tick: EventEmitter<TickEvent> = new EventEmitter<TickEvent>();

  constructor() {
    this.time = new Date();

    // setInterval(()=> {
    //   this.time = new Date();
    //
    //   this.tick.emit({
    //     time: this.time,
    //   });
    // }, 1000);
  }

  ngOnInit() {
  }

}
