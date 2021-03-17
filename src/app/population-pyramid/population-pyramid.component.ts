import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-population-pyramid',
  templateUrl: './population-pyramid.component.html',
  styleUrls: ['./population-pyramid.component.scss']
})
export class PopulationPyramidComponent implements OnInit {

  constructor() { }

  data = [
    {"age":"40-44","sex":"M","value":19.60},
    {"age":"40-44","sex":"F","value":20.70},
    {"age":"30-34","sex":"M","value":30.00},
    {"age":"30-34","sex":"F","value":27.60},
    {"age":"20-24","sex":"M","value":29.40},
    {"age":"20-24","sex":"F","value":29.40},
    {"age":"5-9","sex":"M","value":25.30},
    {"age":"5-9","sex":"F","value":23.60},
    {"age":"10-14","sex":"M","value":18.40},
    {"age":"10-14","sex":"F","value":19.60},
    {"age":"55-59","sex":"M","value":9.80},
    {"age":"55-59","sex":"F","value":10.90},
    {"age":"60-55","sex":"M","value":12.70},
    {"age":"60-55","sex":"F","value":14.40},
    {"age":"60-65","sex":"M","value":4.60},
    {"age":"60-65","sex":"F","value":5.80},
    {"age":"65-69","sex":"M","value":6.30},
    {"age":"65-69","sex":"F","value":7.50},
    {"age":"70-75","sex":"M","value":1.70},
    {"age":"70-75","sex":"F","value":3.50},
    {"age":"75-79","sex":"M","value":2.90},
    {"age":"75-79","sex":"F","value":4.60},
    {"age":"80-85","sex":"M","value":1.20},
    {"age":"80-85","sex":"F","value":1.70},
    {"age":"85+","sex":"M","value":0.60},
    {"age":"85+","sex":"F","value":1.70}
    // {"age":"10-14","sex":"M","value":29.00},
    // {"age":"10-14","sex":"F","value":27.60}
    ];
    
    
    
    
    height = 125
    width = 250
    
    margin = {top: 10, right: 0, bottom: 20, left: 0}
    xM: any;
    xF: any;
    y:any;
    xAxis: any;
    yAxis: any;
    

  ngOnInit(): void {

    
      
      this.xM = d3.scaleLinear()
          .domain([0, d3.max(this.data, d => d.value )])
          .rangeRound([this.width / 2, this.margin.left])
      
      
      this.xF = d3.scaleLinear()
          .domain(this.xM.domain())
          .rangeRound([this.width / 2, this.width - this.margin.right])
      
      this.y = d3.scaleBand()
          .domain(this.data.map(d => d.age))
          .rangeRound([this.height - this.margin.bottom, this.margin.top])
          .padding(0.1)
      
      this.xAxis = g => g
          .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
          .call(g => g.append("g").call(d3.axisBottom(this.xM).ticks(this.width / 80, "s")))
          .call(g => g.append("g").call(d3.axisBottom(this.xF).ticks(this.width / 80, "s")))
          .call(g => g.selectAll(".domain").remove())
          .call(g => g.selectAll(".tick:first-of-type").remove())
      
      
      this.yAxis = g => g
          .attr("transform", `translate(${this.xM(0)},0)`)
          .call(d3.axisLeft(this.y).tickSizeOuter(0))
          .call(g => g.selectAll(".tick text").attr("fill", "white"))
      
      
      
      
      const svg = d3.select('.populationPyramid')
            .append("svg")
      // const svg = d3.create("svg")
            .attr("viewBox", "0, 0, 300, 125")
            .attr("font-family", "sans-serif")
            .attr("font-size", 10);
      
        svg.append("g")
          .selectAll("rect")
          .data(this.data)
          .join("rect")
            .attr("fill", d => d.sex === "M" ?  '#7ad1ff' : '#3d92bf')
            .attr("x", d => d.sex === "M" ? this.xM(d.value) : this.xF(0))
            .attr("y", d => this.y(d.age))
            .attr("width", d => d.sex === "M" ? this.xM(0) - this.xM(d.value) : this.xF(d.value) - this.xF(0))
            .attr("height", this.y.bandwidth());
      
        svg.append("g")
            .attr("fill", "black")
            .attr("text-anchor", "end")
          .selectAll("text")
          .data(this.data)
          .join("text")
            .attr("text-anchor", d => d.sex === "M" ? "start" : "end")
            .attr("x", d => d.sex === "M" ? this.xM(d.value ) - 20 : this.xF(d.value) + 20)
            .attr("y", d => this.y(d.age) + this.y.bandwidth() / 2 )
            .attr("dy", "0.35em")
            .text(d => d.value.toLocaleString() );
      
        svg.append("text")
            .attr("text-anchor", "end")
            .attr("fill", "white")
            .attr("dy", "0.35em")
            .attr("x", this.xM(0) - 4)
            .attr("y", this.y(this.data[0].age) + this.y.bandwidth() / 2)
      
        svg.append("text")
            .attr("text-anchor", "start")
            .attr("fill", "white")
            .attr("dy", "0.35em")
            .attr("x", this.xF(0) + 24)
            .attr("y", this.y(this.data[0].age) + this.y.bandwidth() / 2)
  }

}
