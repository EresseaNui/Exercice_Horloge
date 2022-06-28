import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timezone-component',
  templateUrl: './timezone-component.component.html',
  styleUrls: ['./timezone-component.component.scss'],
})
export class TimezoneComponentComponent implements OnInit {
  cityTimeZones: any[] = [
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Phoenix', timezone: 'America/Phoenix' },
  ];

  constructor() {}

  ngOnInit(): void {}

  setHour(timezone: string): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
    return date;
  }
}
