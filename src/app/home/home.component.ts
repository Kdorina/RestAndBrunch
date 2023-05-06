import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

private subscription!: Subscription;

public dateNow = new Date();
public day = new Date('Jun 01 2023 00:00:00');
milliSeconds = 1000;
seconds = 60;
minutes = 24;
hours = 60

public difference!: number;
public secondsToDay!: number;
public minutesToDay!: number;
public hoursToDay!: number;
public daysToDay!: number;

  private timerDiff(){
    this.difference = this.day.getTime() -new Date().getTime();
    this.locateTime(this.difference);
  }

  private locateTime(difference: any){
    this.secondsToDay = Math.floor((difference) / (this.milliSeconds) % this.seconds);
    this.minutesToDay = Math.floor((difference) / (this.milliSeconds * this.minutes) % this.seconds);
    this.hoursToDay = Math.floor((difference) / (this.milliSeconds * this.minutes * this.seconds) % this.hours);
    this.daysToDay = Math.floor((difference) / (this.milliSeconds * this.minutes * this.seconds * this.hours));
  }

  ngOnInit(): void {
    this.subscription = interval(1000)
    .subscribe(x => { this.timerDiff(); });
  }


}
