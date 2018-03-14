
$('a.selection').click(function(){

  var selected = this.id;
  var time = $('option').get(0).id;
  console.log(time);
  if(selected === 'taste')
  {
    if(time === 'week'){
      $('img').attr('src','/images/taste1.png');
    }
    else{
      $('img').attr('src','/images/taste2.png');
    }
  }
  else if(selected === 'health')
  {
      if(time === 'week'){
      $('img').attr('src','/images/health1.png');
    }
    else{
      $('img').attr('src','/images/health2.png');
    }
  }
  else if(selected === 'mood')
  {
      if(time === 'week'){
      $('img').attr('src','/images/mood1.png');
    }
    else{
      $('img').attr('src','/images/mood2.png');
    }
  }
  else {
      if(time === 'week'){
      $('img').attr('src','/images/taste1.png');
    }
    else{
      $('img').attr('src','/images/taste2.png');
    }
  }

});

var chartData = generateChartData();

var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "dark",
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": chartData,
    "synchronizeGrid":true,
    "valueAxes": [{
        "id":"v1",
        "axisColor": "#FF6600",
        "axisThickness": 2,
        "axisAlpha": 1,
        "position": "left"
    }, {
        "id":"v2",
        "axisColor": "#FCD202",
        "axisThickness": 2,
        "axisAlpha": 1,
        "position": "right"
    }, {
        "id":"v3",
        "axisColor": "#B0DE09",
        "axisThickness": 2,
        "gridAlpha": 0,
        "offset": 50,
        "axisAlpha": 1,
        "position": "left"
    }],
    "graphs": [{
        "valueAxis": "v1",
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "taste",
        "valueField": "taste",
    "fillAlphas": 0
    }, {
        "valueAxis": "v2",
        "lineColor": "#FCD202",
        "bullet": "square",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "health",
        "valueField": "health",
    "fillAlphas": 0
    }, {
        "valueAxis": "v3",
        "lineColor": "#B0DE09",
        "bullet": "triangleUp",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "mood",
        "valueField": "mood",
    "fillAlphas": 0
    }, {
        "valueAxis":"v4",
        "lineColor": "#4286f4",
        "bullet": "triangleDown",
        "bulletBorderThickness":1,
        "hideBulletsCount":30,
        "title": "anxiety",
        "valueFied":"anxiety",
        "fillAlphas":0
    }],
    "chartScrollbar": {},
    "chartCursor": {
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "minorGridEnabled": true
    },
    "export": {
      "enabled": true,
        "position": "bottom-right"
     }
});

chart.addListener("dataUpdated", zoomChart);
zoomChart();


// generate some random data, quite different range
function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);

        var health=0;
        var taste=0;
        var mood=0;
        var anxiety=0;


    for (var i = 0; i < 100; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(firstDate);
        newDate.setDate(newDate + i);
        console.log(newDate);

        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

        chartData.push({
            date: newDate,
            visits: visits,
            hits: hits,
            views: views
        });
    }
    return chartData;
}

function zoomChart(){
    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
}
