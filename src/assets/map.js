// window.chartinit = 
function chartinit () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // Create map instance
        var chart = am4core.create("chartdiv", am4maps.MapChart);
        
        // Set map definition
        chart.geodata = am4geodata_worldLow;
        
        // Set projection
        chart.projection = new am4maps.projections.Miller();
        
        // Series for World map
        var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.exclude = ["AQ"];
        worldSeries.useGeodata = true;
        
        var polygonTemplate = worldSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = chart.colors.getIndex(0);
        polygonTemplate.nonScalingStroke = true;
        
        // Hover state
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");
        
        // Series for United States map
        var usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
        usaSeries.geodata = am4geodata_usaLow;
        
        var usPolygonTemplate = usaSeries.mapPolygons.template;
        usPolygonTemplate.tooltipText = "{name}";
        usPolygonTemplate.fill = chart.colors.getIndex(1);
        usPolygonTemplate.nonScalingStroke = true;
        
        // Hover state
        var hs = usPolygonTemplate .states.create("hover");
        hs.properties.fill = am4core.color("#367B25");
}