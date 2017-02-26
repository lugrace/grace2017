
var id = 5815135;
// var url = 'http://history.openweathermap.org/data/2.5/history/city?id=' + id +"&type=hour&start="+start+"&cnt="cnt+"&APPID="+mykey;

// var jsonW = JSON.parse(getJSON(url));
var temps = [];
var labels = [];
var arr = [];
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// var ori = 'lmao';
// var end = 'lol';

  // var url = "https://api.openweathermap.org/data/2.5/weather?q=Washington&mode=json&units=imperial&start="+i+"&appid="+mykey;
  //var url = "http://api.openweathermap.org/data/2.5/history/weather?q=Washington&mode=json&units=imperial&start="+i+"&appid="+mykey;
var url = 'http://api.openweathermap.org/data/2.5/forecast?id=5815135&mode=json&units=imperial&appid='+mykey;
$.getJSON(url, function(data) {
    //data is the JSON string
    arr = data.list;
    for(var i = 0; i < arr.length; i++){
      uni = arr[i].dt;
      var myDate = new Date(uni*1000);
      var s = (myDate.toLocaleString());
      labels.push(s);
      temps.push(arr[i].main.temp);
    }
    makeChart();
  });

function updateTemps(){
  var x = document.getElementById('frm1');
  var fdate = str(x.elements[0].value);
  var ldate = str(x.elements[1].value);
  if(fdate != "" && ldate != ""){
    labels = []
    temps = []
    var myfDate = new Date(fdate); // Your timezone!
    var mylDate = new Date(ldate);
    var myfUnix = myfDate.getTime()/1000.0;
    var mylUnix = mylDate.getTime()/1000.0;
    for(var j = 0; j < arr.length; j++){
      uni = arr[j].dt;
      if(uni >= myfUnix && uni <= mylUnix){
        var myDate = new Date(uni*1000);
        var s = (myDate.toLocaleString());
        labels.push(s);
        temps.push(arr[j].main.temp);
      }
    }
    //February 27, 2017 4:00:00
    //March 1, 2017 4:00:00
  }
  makeChart();
}

function makeChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
  //type: 'bar',
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'temperatures',
      data: temps,
      backgroundColor: "rgba(153,255,51,0.4)"
    }]},
  options: {
    title :{
      display:true,
      text: "Washington DC's (5815135) Weather"
    }
  }
  });
}
