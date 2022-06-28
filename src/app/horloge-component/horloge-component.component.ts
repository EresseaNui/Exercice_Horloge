import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horloge-component',
  templateUrl: './horloge-component.component.html',
  styleUrls: ['./horloge-component.component.scss'],
})
export class HorlogeComponentComponent implements OnInit {
  @Input()
  cityData!: any;
  @Input()
  date!: string;

  constructor() {}

  ngOnInit(): void {}
}
