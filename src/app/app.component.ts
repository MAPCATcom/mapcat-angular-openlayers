import { Component, OnInit } from '@angular/core';

import * as ol from 'openlayers';

const mapview = require('../../node_modules/@mapcat/mapview-init/src/mapcat-mapview-init.js');

@Component({
  selector: 'app-map',
  template: `
      <div *ngIf="isTileUrlLoaded">
        <mangol [config]='config'></mangol>
      </div>
    `
})
export class AppComponent implements OnInit {
  config: any;
  isTileUrlLoaded: boolean = false;

  private getViewUrl(): Promise<string> {
    return new Promise((resolve, reject) => {
      mapview.initRasterView('NrP1WQLjuHTU220tHAbs3fzRdIg0nmhjMeL2pvwj', null, null, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  };

  public ngOnInit(): any {
    this.getViewUrl().then( url => {
      this.config = {
        map: {
          renderer: 'canvas',
          target: 'demo-map',
          view: {
            projection: 'EPSG:3857',
            center: ol.proj.transform([0, 51.5], 'EPSG:4326', 'EPSG:3857'),
            zoom: 13
          },
          layertree: {
            layers: [{
              name: 'Mapcat map layer',
              layer: new ol.layer.Tile({
                source: new ol.source.XYZ({
                  url: url,
                  projection: 'EPSG:3857'
                })
              })
            }],
            groups: []
          }
        }
      };
      this.isTileUrlLoaded = true;
    }).catch( error => {
      console.log(error);
      if (error.message) {
        alert (error.message);
      } else {
        alert (error);
      }
    });
  };
}
