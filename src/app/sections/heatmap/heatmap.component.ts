import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';
  constructor() { }

  ngOnInit(): void {
  }

}
