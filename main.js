window.onload = function() {

var chartPie1 = new CanvasJS.Chart("chartContainerPie1", {
	theme: "light2",
	animationEnabled: true,
	title: {
		text: "Average Non-Traded REIT Competitor"
	},
  legend: {
    horizontalAlign: "right",
    verticalAlign: "center",
    reversed: true
  },
  subtitles: [
  {
    text: "Total = 28.77%",
    horizontalAlign: "center",
    verticalAlign: "bottom",
    fontSize: 20
  }
  ],
	data: [{
		type: "pie",
		startAngle: 10,
		showInLegend: "true",
		legendText: "{legendText}",
		indexLabelFontSize: 16,
		dataPoints: [
			{ y: 45.00, legendText: "Upfront Costs", color: "#194C61" },
			{ y: 35.00, legendText: "Recurring Costs", color: "#296E8F" },
			{ y: 20.00, legendText: "Operational Costs", color: "#C77732" }
		]
	}]
});

var chartPie2 = new CanvasJS.Chart("chartContainerPie2", {
	theme: "light2",
	title: {
		text: "stREITwise"
	},
  subtitles: [
  {
    text: "Total = 13.00%",
    horizontalAlign: "center",
    verticalAlign: "bottom",
    fontSize: 20
  }
  ],
	data: [{
		type: "pie",
		startAngle: 200,
    indexLabelPlacement: "inside",
    indexLabelFontSize: 10,
    indexLabelFontColor: "black",
    indexLabelTextAlign: "center",
    indexLabelMaxWidth: 80,
    indexLabelWrap: true,
		indexLabelFontSize: 16,
    legend:{
      dockInsidePlotArea: true 
    },
		dataPoints: [
			{ y: 5.00, color: "#194C61" },
			{ y: 15.00, color: "#296E8F" },
			{ y: 25.00, indexLabel: "Operational Costs 0%", indexLabelFontSize: 10,  color: "gray" },
      { y: 55.00, color: "transparent" }
		]
	}]
});

var chartLine = new CanvasJS.Chart("chartContaineLine",
  {
    theme: "dark2",
    axisY:{
      title : "Growth (%)"
    },
    title:{
    text: "Real Estate vs. Stock Market", 
    fontColor: "#ffffff",
    },
    legend: {
      horizontalAlign: "right",
      verticalAlign: "center",
      reversed: true
    },
    axisY:{
      labelFormatter: function(){
        return " ";
      }
    },
    data: [
    {
      type: "line",
      markerColor: "#30A2D0",
      lineColor: "#30A2D0",
      showInLegend: "true",
      legendText: "S@P",
      dataPoints: [
        { x: 00, y: 450, label: "00" },
        { x: 01, y: 414, label: "01" },
        { x: 02, y: 520, label: "02" },
        { x: 03, y: 460, label: "03" },
        { x: 04, y: 450, label: "04" },
        { x: 05, y: 500, label: "05" },
        { x: 06, y: 480, label: "06" },
        { x: 07, y: 480, label: "07" },
        { x: 08, y: 410, label: "08" },
        { x: 09, y: 500, label: "09" },
        { x: 10, y: 480, label: "10" },
        { x: 11, y: 800, label: "11" },
        { x: 12, y: 800, label: "12" },
        { x: 13, y: 800, label: "13" },
        { x: 14, y: 800, label: "14" },
        { x: 15, y: 800, label: "15" }
      ]
    },
    {
      type: "line",
      markerColor: "#D77B2D",
      lineColor: "#D77B2D",
      showInLegend: "true",
      legendText: "Real Estate",
      dataPoints: [
        { x: 00, y: 460, label: "00" },
        { x: 01, y: 500, label: "01" },
        { x: 02, y: 590, label: "02" },
        { x: 03, y: 490, label: "03" },
        { x: 04, y: 480, label: "04" },
        { x: 05, y: 520, label: "05" },
        { x: 06, y: 505, label: "06" },
        { x: 07, y: 510, label: "07" },
        { x: 08, y: 415, label: "08" },
        { x: 09, y: 515, label: "09" },
        { x: 10, y: 510, label: "10" },
        { x: 11, y: 830, label: "11" },
        { x: 12, y: 830, label: "12" },
        { x: 13, y: 830, label: "13" },
        { x: 14, y: 825, label: "14" },
        { x: 15, y: 825, label: "15" }
      ]
    }
    ]
    });
chartPie1.render();
chartPie2.render();
chartLine.render();
}