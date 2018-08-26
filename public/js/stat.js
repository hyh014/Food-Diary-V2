$(document).ready(function(){
  generateGraph();
  var w = $(document).width()*.9;
  var h = $(document).height()*.7;
  document.getElementById('chartdiv').style.width = w +'px';
  document.getElementById('chartdiv').style.height = h + 'px';
});
$('a.selection').click(function(){

  var selected = this.id;
  var time = $('option').get(0).id;
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




function generateGraph(){
  $.get('/user/'+sessionStorage.name,dataCallBack);
}

function dataCallBack(result){
  var chartData = [];
  var firstDate = new Date();
      var health = 0;
      var taste = 0;
      var mood = 0;
      var anxiety = 0;
      var sameDate = result.datas[result.datas.length-1].date;
      var sameDateCount=0;
  for (var i = result.datas.length-2; i >0 ; i--) {
      if(sameDate == result.datas[i].date){
        health += Number(result.datas[i].health);
        taste += Number(result.datas[i].taste);
        mood += Number(result.datas[i].mood);
        anxiety += Number(result.datas[i].anxiety);
        sameDateCount++;
      }
      else{
        health = health/sameDateCount;
        taste = taste/sameDateCount;
        mood = mood/sameDateCount;
        anxiety = anxiety/sameDateCount;
        var newDate = AmCharts.stringToDate(sameDate,"MM/DD/YYYY");
        chartData.push({
            date: newDate,
            health:health,
            taste:taste,
            mood:mood,
            anxiety:anxiety
        });
        health = 0;
        taste = 0;
        mood = 0;
        anxiety = 0;
        sameDateCount = 0;
        sameDate = result.datas[i].date;
      }
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.

  }

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
          "valueField":"anxiety",
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
       },
    "responsive": {
      "enabled": true
    }
  });
  function zoomChart(){
    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
  }
 chart.addListener("dataUpdated", zoomChart);
 zoomChart();
  // generate some random data, quite different range

}
