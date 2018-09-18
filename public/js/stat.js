
$(document).ready(function(){
  // Initialize Firebase
  var config = {
  	apiKey: "AIzaSyCSHqADgMlrT2iHoWBp7NLwePbmFG2S4PM",
  	authDomain: "my-project-1519903201611.firebaseapp.com",
  	databaseURL: "https://my-project-1519903201611.firebaseio.com",
  	projectId: "my-project-1519903201611",
  	storageBucket: "my-project-1519903201611.appspot.com",
  	messagingSenderId: "58050717665"
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
      generateChart();
      var w = $(document).width()*.4;
      var h = $(document).height()*.4;
      document.getElementById('chartdiv').style.width = w +'px';
      document.getElementById('chartdiv').style.height = h + 'px';
  	} else {
  		res.redirect('/login');
  	}
  	});

    function generateChart(){
      const UUID = firebase.auth().currentUser.uid;
      let ref = firebase.database().ref('users/'+UUID);

      let list = [];
      let sameDate;
      let sameDateCount=0;
      var health = 0;
      var taste = 0;
      var mood = 0;
      var anxiety = 0;

      ref.once('value',function(snapshot){

          snapshot.forEach(function(child){
          let val = child.val();
          var newDate = AmCharts.stringToDate(val.date,"MM/DD/YYYY");
          list.push({
            'health':val.health,
            'taste':val.taste,
            'mood':val.mood,
            'anxiety':val.anxiety,
            'date':newDate
          });
        });
        var chartData = [];
        var health = 0;
        var taste = 0;
        var mood = 0;
        var anxiety = 0;
        var sameDate = list[0].date;
        var sameDateCount=1;
        health=list[0].health;
        taste=list[0].taste;
        mood=list[0].mood;
        anxiety=list[0].anxiety;
        for (let i = 1; i <=list.length-1; i++) {
          if(sameDate == list[i].date){
            health += Number(list[i].health);
            taste += Number(list[i].taste);
            mood += Number(list[i].mood);
            anxiety += Number(list[i].anxiety);
            sameDateCount++;
          }
          else{
            health = health/sameDateCount;
            taste = taste/sameDateCount;
            mood = mood/sameDateCount;
            anxiety = anxiety/sameDateCount;
            chartData.push({
                date: sameDate,
                health:health,
                taste:taste,
                mood:mood,
                anxiety:anxiety
            });
            health = Number(list[i].health);
            taste = Number(list[i].taste);
            mood = Number(list[i].mood);
            anxiety = Number(list[i].anxiety);
            sameDateCount = 1;
            sameDate = list[i].date;
          }
        }
        console.log(chartData);
        let chart = AmCharts.makeChart("chartdiv", {
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
                "minorGridEnabled": true,
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
      });
    }
});



  // generate some random data, quite different range




              //When Time Allows Finish Edit Function
/*
$(".edit").click(function(){
  sessionStorage.setItem('edit',true);
  sessionStorage.setItem('editDate',true);
  var image = $(this).siblings('.container').children('img')[0].src;
  var foodName = $(this).siblings('#input').children('#foodName').text();//$('#foodName').text();
  var comments = $(this).siblings('#input').children('#comments').text();//$('#comments').text();
  var health = $(this).siblings('#ratings').children('#health').text();//$('#health').text();
  var taste = $(this).siblings('#ratings').children('#taste').text();//$('#taste').text();
  var mood = $(this).siblings('#ratings').children('#mood').text();//$('#mood').text();
  var anxiety = $(this).siblings('#ratings').children('#anxiety').text();//$('#anxiety').text();
  var date = $(this).siblings('#date').text();//$('#date').text();
  var time = date.substring(11);
  var date = date.substring(0,10);
  health = health.substring(7,8);
  taste = taste.substring(6,7);
  mood = mood.substring(5,6);
  anxiety = anxiety.substring(8,9);
  sessionStorage.setItem('image',image);
  sessionStorage.setItem('foodName',foodName);
  sessionStorage.setItem('comments',comments);
  sessionStorage.setItem('health',health);
  sessionStorage.setItem('taste',taste);
  sessionStorage.setItem('mood',mood);
  sessionStorage.setItem('anxiety',anxiety);
  sessionStorage.setItem('time',time);
  sessionStorage.setItem('date',date);
  location.replace("/entry2/"+sessionStorage.getItem('name'));
});*/
