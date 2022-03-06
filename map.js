
function drawMap(){

    const height = document.getElementById("map-container-1").offsetHeight;
    const width = document.getElementById("map-container-1").offsetWidth;

    const svg_map = d3.select("#cat_map")
                    .attr('width', width)
                    .attr('height', height);

    d3.json("https://raw.githubusercontent.com/mcocam/D3js_GeoJson_Mapshaper/master/municipis_Catalunya_s.geojson")
                    .then(d => {
                
                        const projection = d3.geoMercator()
                                            .fitSize([width*0.8, height], d);

                        svg_map.selectAll("*").remove();

                        svg_map.append("g")
                                .selectAll("path")
                                .data(d.geometries)
                                .join("path")
                                .attr("fill", "grey")
                                .attr("d", d3.geoPath().projection(projection))
                                .style("stroke", "white")
                                .style("stroke-width", 0.2)

                        svg_map.select("g")
                                .attr("transform", "translate(70,0)")
                    });

}

drawMap();

window.addEventListener("resize", drawMap);