import { Component, NgZone, OnDestroy, Input, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";

import am4themes_animated from '@amcharts/amcharts4/themes/animated';
declare function chartinit():any;
    
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'chart-maps',
  templateUrl: './map.component.html',
})
export class MapsChartComponent implements OnInit, OnDestroy {
  @Input() data: any;
  @Input() index: number;

  private chart: am4maps.MapChart;

  constructor(private zone: NgZone) {
    // am4core.options.commercialLicense = true;
  }

  ngOnInit() {
    chartinit()
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
