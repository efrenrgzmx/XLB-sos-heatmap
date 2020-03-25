import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})



export class HeatmapComponent implements OnInit {

  latitude = 23.6345005;
  longitude = -102.5527878;
  mapType = "roadmap";
  zoom = 5;
  minClusterSize = 2;


  constructor() { }

  ngOnInit(): void {
  }

}
