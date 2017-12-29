import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderChart();
  }


  private data = [
    {
      name: 'ibrahim',
      data: [21,15,54,84,8,8,4,1,85,8,4,8,8]
    },
    {
      name: 'Yusuph',
      data: [12,5,54,8,42,84,1,87,8,54,100]
    },
    {
      name: 'Marwa',
      data: [1,5,88,4,1,55,5,55,25,98,77,9]
    }];



  // chart display type are  line, spline, area, areaspline, column, bar, pie, scatter, gauge, arearange, areasplinerange and columnrange

  renderChart(){
    jQuery('#container').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Malipo ya umeme kwa kila mpangi kwa mwaka'
      },
      subtitle: {
        text: 'Source: Wickerlabs.com'
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },
      yAxis: {
        title: {
          text: 'Kiasi Elfu'
        },
        labels: {
          formatter: function () {
            return this.value ;
          }
        }
      },
      tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b>' +
        '<br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: this.data
    });
  }

}
