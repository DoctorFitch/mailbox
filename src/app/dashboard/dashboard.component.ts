import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api: DashboardService) { }

  // Store results of API
  comments;

  // Chart configuration (line)
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    animation: false,
    scaledisplay: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  };
  public barChartLabels: string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
  public barChartType: string = 'line';
  public barChartLegend: boolean = false;

  // Chart data
  public barChartData: any[] = [
    { data: [66, 400, 83, 82, 56, 51, 43], label: 'Invoice' }
  ];

  ngOnInit() {
    // call API (DashboardService) to get comments
    this.api.getComments().subscribe((comments) => {
      this.comments = comments;
      console.log(comments);
    });
  }

}
