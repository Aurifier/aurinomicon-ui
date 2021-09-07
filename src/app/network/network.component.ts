import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { InteractionsService } from '../interactions.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  private svg: any;

  constructor(private interactions: InteractionsService) { }

  ngOnInit(): void {
    this.createSvg();
    this.dataSpike();
  }

  private createSvg(): void {
    this.svg = d3.select("figure#network")
      .append("svg")
      .attr("width", 640)
      .attr("height", 480)
      .append("g");
  }

  private dataSpike(): void {
    this.svg
    .selectAll("line")
    .data([{"source": 1, "target": 2}])
    .enter()
    .append("line").style("stroke", "#aaa");

    this.interactions.getInteractions();
  }
}
