import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-geoanalytics',
  templateUrl: './geoanalytics.component.html',
  styleUrl: './geoanalytics.component.css'
})
export class GeoanalyticsComponent implements OnInit {
public climateChangeOptions!: ChartOptions;
public urbanGrowthOptions!: ChartOptions;

ngOnInit(): void {
  this.initClimateChangeChart();
  this.initUrbanGrowthChart();
}

initClimateChangeChart(): void {
  this.climateChangeOptions = {
    series: [
      {
        name: "Avg Temp (°C)",
        data: [20.5, 21.0, 21.2, 21.5, 22.0, 22.5],
      },
    ],
    chart: {
      height: 300,
      type: "line",
    },
    title: {
      text: "Climate Change Trends",
    },
    xaxis: {
      categories: ["2010", "2012", "2014", "2016", "2018", "2020"],
    },
    yaxis: {
      title: {
        text: "Temperature (°C)",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };
}

initUrbanGrowthChart(): void {
  this.urbanGrowthOptions = {
    series: [
      {
        name: "Urban Population (M)",
        data: [1.5, 2.0, 2.5, 3.0, 3.5],
      },
    ],
    chart: {
      height: 300,
      type: "bar",
    },
    title: {
      text: "Urban Growth Forecast",
    },
    xaxis: {
      categories: ["2020", "2025", "2030", "2035", "2040"],
    },
    yaxis: {
      title: {
        text: "Population (Millions)",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };
}
}