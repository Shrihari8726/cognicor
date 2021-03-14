import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chord-diagram',
  templateUrl: './chord-diagram.component.html',
  styleUrls: ['./chord-diagram.component.scss']
})
export class ChordDiagramComponent implements OnInit {

  constructor() { }


      /************************************** */
/*******Variables***********************/
/************************************* */
names = ["Settal, WA",
"Atlanta, GA",
"Bostan, MA",
"Chicago, IL",
"Dallas/Fort Worth,TX",
"Denver, CO",
"Detroit, MI",
"Minneapolis, MN",
"New York, NY",
"Orlando, FL",
"Phoenix, AZ",
"San Fransisco,CA",
"Indiana, IN",
"Iowa, IA",
];

matrix = [
[5,2,1,2,1,5,3,2,4,4,6,2,5,3],
[4,1,7,5,14,12,3,9,2,6,6,0,4,5],
[8,7,4,1,5,4,8,7,6,3,4,2,1,2],
[12,2,3,30,1,6,2,6,2,3,1,6,4,9],
[3,6,5,12,16,7,3,4,8,4,0,3,0,2],
[3,12,2,9,5,7,2,6,2,5,2,12,0,1],
[9,7,3,5,2,17,7,6,2,6,3,5,7,1],
[7,4,5,11,4,7,9,3,7,8,9,6,7,1],
[3,7,8,9,6,1,0,1,9,7,3,5,0,0],
[9,7,3,5,2,7,6,2,6,22,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,61,0,0,6],
[0,0,0,0,0,0,0,0,0,0,32,39,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,19,14],
[0,0,0,0,0,0,0,0,0,0,0,0,0,23]
];

/************************************** */
width = 300

height = 300

color = d3.scaleOrdinal(this.names, d3.quantize(d3.interpolateRainbow, this.names.length))

chord: any;
arc: any;
ribbon: any;

innerRadius = Math.min(this.width, this.height) * 0.5 - 90

outerRadius = this.innerRadius + 3

  ngOnInit(): void {



this.chord = d3.chordDirected()
.padAngle(10 / this.innerRadius)
.sortSubgroups(d3.descending)
.sortChords(d3.descending)

this.arc = d3.arc()
.innerRadius(this.innerRadius)
.outerRadius(this.outerRadius)

this.ribbon = d3.ribbon()
.radius(this.innerRadius - 1)
.padAngle(1 / this.innerRadius)



  const svg = d3.select('.chordDiagram')
  .append("svg")
.attr("viewBox", "-150 -150 300 300");

const chords = this.chord(this.matrix);

const group = svg.append("g")
.attr("font-size", 5)
.attr("font-family", "sans-serif")
.selectAll("g")
.data(chords.groups)
.join("g");

group.append("path")
.attr("fill", (d:any) => this.color(this.names[d.index]))
.attr("d", this.arc);

group.append("text")
.each((d:any) => (d.angle = (d.startAngle + d.endAngle) / 2))
.attr("dy", "0.35em")
.attr("transform", (d:any) => `
  rotate(${(d.angle * 180 / Math.PI - 90)})
  translate(${this.outerRadius + 5})
  ${d.angle > Math.PI ? "rotate(180)" : ""}
`)
.attr("text-anchor", (d:any) => d.angle > Math.PI ? "end" : null)
.text((d:any) => this.names[d.index]);

// group.append("title")
// .text((d:any) => `${this.names[d.index]}
// ${d3.sum((c: number) => (c.source.index === d.index) * c.source.value)} outgoing →
// ${d3.sum((c: number) => (c.target.index === d.index) * c.source.value)} incoming ←`);

svg.append("g")
.attr("fill-opacity", 0.75)
.selectAll("path")
.data(chords)
.join("path")
.style("mix-blend-mode", "multiply")
.attr("fill", (d: any) => this.color(this.names[d.target.index]))
.attr("d", this.ribbon)
.append("title")
.text((d:any) => `${this.names[d.source.index]} → ${this.names[d.target.index]} ${d.source.value}`);
  }

}
