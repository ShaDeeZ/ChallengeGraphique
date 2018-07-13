
var dataPoints = [];
let p = 0;
let r = -1;
setInterval(function(){ 
$.getJSON("https://inside.becode.org/api/v1/data/random.json", function(data) {
p += 10;
$.each(data, function(key, value){
dataPoints.push({x: value[0] + p, y: parseInt(value[1])});

});
    console.log(dataPoints[1]);
    
    
    // DEUXIEME CHANCE
    var data = [
    ];
    var width = 500;
    var height = 500;
    var globalX = 0;
    var duration = 500;
    var max = 230;
    var step = 20;
    d3.selectAll("#chartSvg2 > *").remove();
    var chart = d3.select('#chartSvg2')
    .attr('width', width + 50)
    .attr('height', height + 50);
    var x = d3.scaleLinear().domain([0, 50]).range([0, 500]);
    var y = d3.scaleLinear().domain([0, 50]).range([500, 0]);
    // -----------------------------------
    var line = d3.line()
					    .x(function(d){ return x(d.x); })
					    .y(function(d){ return y(d.y); });
    var smoothLine = d3.line().curve(d3.curveCardinal)
					    .x(function(d){ return x(d.x); })
					    .y(function(d){ return y(d.y); });
    var lineArea = d3.area()
					    .x(function(d){ return x(d.x); })
					    .y0(y(0))
					    .y1(function(d){ return y(d.y); })
					    .curve(d3.curveCardinal);
    // -----------------------------------
    // Draw the axis
    var xAxis = d3.axisBottom().scale(x);
    var axisX = chart.append('g').attr('class', 'x axis')
			     .attr('transform', 'translate(0, 500)')
			     .call(xAxis);
    // Draw the grid
    chart.append('path').datum([{x: 0, y: 150}, {x: 500, y: 150}])
					    .attr('class', 'grid')
					    .attr('d', line);
    chart.append('path').datum([{x: 0, y: 300}, {x: 500, y: 300}])
					    .attr('class', 'grid')
					    .attr('d', line);
    chart.append('path').datum([{x: 0, y: 450}, {x: 500, y: 450}])
					    .attr('class', 'grid')
					    .attr('d', line);
    chart.append('path').datum([{x: 50, y: 0}, {x: 50, y: 500}])
					    .attr('class', 'grid')
					    .attr('d', line);
    chart.append('path').datum([{x: 250, y: 0}, {x: 250, y: 500}])
					    .attr('class', 'grid')
					    .attr('d', line);
    chart.append('path').datum([{x: 450, y: 0}, {x: 450, y: 500}])
					    .attr('class', 'grid')
					    .attr('d', line);
    // Append the holder for line chart and fill area
    var path = chart.append('path');
    var areaPath = chart.append('path');
    // Main loop
    function tick() {
	    // Generate new data
        r++;
        console.log(dataPoints[r].y)
	    var point = {
		    x: globalX,
		    y: dataPoints[r].y
	    };
	    data.push(point);
	    globalX += step;
	    // Draw new line
	    path.datum(data)
		    .attr('class', 'smoothline')
		    .attr('d', smoothLine);
	    // Draw new fill area
	    areaPath.datum(data)
		    .attr('class', 'area')
		    .attr('d', lineArea);
	    // Shift the chart left
	    x.domain([globalX - (max - step), globalX]);
	    axisX.transition()
		     .duration(duration)
		     .ease(d3.easeLinear,2)
		     .call(xAxis);
	    path.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX - max) + ')')
	    areaPath.attr('transform', null)
		    .transition()
		    .duration(duration)
		    .ease(d3.easeLinear,2)
		    .attr('transform', 'translate(' + x(globalX - max) + ')')
		    .on('end', tick)
	    // Remote old data (max 50 points)
	    if (data.length > 50) data.shift();
    }
    tick();
    
    // FIN DEUXIEME CHANCE
});
    },6000)
  

    
  
 