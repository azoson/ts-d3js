import 'babel-polyfill';
import * as d3 from 'd3';
import { d3csvAsync } from '../base/data-async';

async function main() {
    const path = "../assets/data_basics.csv";
    const data = await d3csvAsync(path);

    const svg =
        d3.select("body")
           .append("svg")
            .attr("width", 1000)
            .attr("height", 1000)
    
    const circles =
        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle");
    
    circles.attr("cx", (_, i) => (i * 100) + 50)
            .attr("cy", 100)
            .attr("r", (d) => (d.score as any)/2)
            .attr("stroke", "black")
            .attr("fill", "lightblue");

    const text =
        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text");
    text.text((d) => d.group)
        .attr("x", (_, i) => (i * 100) + 45)
        .attr("y", 30);
}

window.onload = () => {
    main();
};
