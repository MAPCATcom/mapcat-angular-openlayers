import { Component, OnInit } from '@angular/core';

declare var proj4: any;
import * as ol from 'openlayers';

@Component({
  selector: 'app-map',
  template: `
      <mangol [config]='config'></mangol>
    `
})
export class AppComponent implements OnInit {
  config: any;


  public ngOnInit(): any {
    proj4
      .defs(
      'EPSG:23700',
      `+proj=somerc +lat_0=47.14439372222222 +lon_0=19.04857177777778 +k_0=0.99993 +x_0=650000 +y_0=200000 +ellps=GRS67 +units=m +no_defs`);

    let resolutions: number[] = [1120.0, 560.0, 280.0, 140.0, 55.99999999999999, 27.999999999999996,
      13.999999999999998, 5.6, 2.8, 1.4, 0.5599999999999999, 0.27999999999999997
    ];
    let maxExtent: ol.Extent = [421306.58134742436, 43986.223614953604, 994746.5813474243, 617426.2236149536];
    let tileSize: ol.Size = [256, 256];

    this.config = {
      map: {
        renderer: 'canvas',
        target: 'demo-osmgwc-map',
        view: {
          projection: 'EPSG:23700',
          center: ol.proj.transform([19.4984, 47.0408], 'EPSG:4326', 'EPSG:3857'),
          zoom: 8
        },
        layers: [
          {
            type: 'layer',
            name: 'OpenStreetMap layer',
            layer: new ol.layer.Tile({
              source: new ol.source.XYZ({
                url: 'https://terkepem.hu/tile/{z}/{x}/{y}.png',
                projection: 'EPSG:23700'
              })
            })
          }
        ]
      }
    }
  }
}
