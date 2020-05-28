
$(document).ready(function(){
  // Initialize Firebase
  $.ajax({url:'/user/env',success:function(result){
    // if(!firebase.apps.length)
    // {
    //   firebase.initializeApp({
    //     apiKey: result.apiKey,
    //     authDomain: result.authDomain,
    //     databaseURL: result.databaseURL,
    //     storageBucket: result.storageBucket,
    //     messagingSenderId: result.messagingSenderId,
    //     appId: result.appId,
    //     projectId: result.projectId
    //   });
    //   console.log("init");
    // }
    var firebaseConfig = {
      apiKey: "AIzaSyCSHqADgMlrT2iHoWBp7NLwePbmFG2S4PM",
      authDomain: "my-project-1519903201611.firebaseapp.com",
      databaseURL: "https://my-project-1519903201611.firebaseio.com",
      projectId: "my-project-1519903201611",
      storageBucket: "my-project-1519903201611.appspot.com",
      messagingSenderId: "58050717665",
      appId: "1:58050717665:web:4a91f091b0d62359"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.auth().currentUser);

  firebase.auth().onAuthStateChanged(function(user) {
    
    console.log("Firebase?");
    console.log(user);
    if (user) {
<<<<<<< HEAD
       generateChart();
=======
      generateChart();
>>>>>>> 08b79cad7c2cce97c628ac3b9780424dedb1e0b0
      var h = $(document).height()*.5;
      document.getElementById('chartdiv').style.height = h + 'px';
    }else{
      console.log("no user");
    }
    });

    function generateChart(){
      console.log("generating graph");
      const UUID = firebase.auth().currentUser.uid;
      let ref = firebase.database().ref('users/'+UUID);

      let chartData = [];

      ref.once('value',function(snapshot){

          snapshot.forEach(function(child){
          let val = child.val();

          chartData.push({
            'health':val.health,
            'taste':val.taste,
            'mood':val.mood,
            'anxiety':val.anxiety,
            'date':val.date
          });
        });

        let chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "dark",
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": chartData,
            "dateFormatter":{
              "dateFormat": "MM/dd/yyyy HH:NN:SS A"
            },
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
                "parseDates": false,
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

	}});


});
