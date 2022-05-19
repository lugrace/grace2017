
var wID = 5815135; //Washington DC's ID
var bID = 2661495; //Birmenstorf ID
var lID = 2267056; //Lisbon's ID
var id = [5815135, 2661495, 2267056];
var temps = [[],[],[]]; //array of arrays
var labels = []; 
var arr = [[],[],[]]; //array of arrays
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
for(var a = 0; a < id.length; a++){(function(a){
  var t = [];
  var b = a;
  var url = 'http://api.openweathermap.org/data/2.5/forecast?id='+id[a]+'&mode=json&units=imperial&appid='+mykey;
  $.getJSON(url, function(data) {     //data is the JSON string
      console.log("JSON", b);
      arr[a] = data.list;
      for(var i = 0; i < arr[a].length; i++){
        uni = arr[a][i].dt;
        var myDate = new Date(uni*1000);
        var s = (myDate.toLocaleString());
        if(labels.length<arr[a].length){ //ensures only pushes once cuz labels same for all threee
          labels.push(s);
        }
        t.push(arr[a][i].main.temp);
      }
    });
  temps[a] = t;
  })(a);
}
makeChart(labels, temps);

function updateTemps(){
  var x = document.getElementById('frm1');
  var fdate = x.elements[0].value;
  var ldate = x.elements[1].value;
  if(fdate != "" && ldate != ""){
    labels = []; 
    temps = [[],[],[]]; //array of arrays
    var myfDate = new Date(fdate); // time range!
    var mylDate = new Date(ldate);
    var myfUnix = myfDate.getTime()/1000.0;
    var mylUnix = mylDate.getTime()/1000.0;
    var t = [];
    for(var j = 0; j < id.length; j++){(function(j){
      t = [];
      for(var a = 0; a < arr[j].length; a++){
        uni = arr[j][a].dt;
        if(uni >= myfUnix && uni <= mylUnix){
          var myDate = new Date(uni*1000);
          var s = (myDate.toLocaleString());
          if(j==0){
            labels.push(s);
          }
          t.push(arr[j][a].main.temp);
        }
      }
      console.log("t", t);
      console.log("J", j);
      temps[j] = t;
    })(j);
  }
  console.log("labels", labels);
  console.log("temps", temps);
  makeChart(labels, temps);
}
}

function makeChart(labels, temps){ //temp is an array of arrays
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Washington DC',
        data: temps[0],
        backgroundColor: "rgba(153,255,51,0.4)"
      },{
        label: 'Birmenstorf',
        data: temps[1],
        backgroundColor: "rgba(0, 234, 52, 0.7"
      },{
        label: 'Lisbon',
        data: temps[2],
        backgroundColor: "rgba(237, 28, 53, 0.3)"
      }]},
    options: {
      title :{
        display:true,
        text: "Temperatures :^)"
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'temp (F)'
          }
        }],
        xAxes:[{
         scaleLabel:{
            display:true,
            labelString:'day'
         }
        }]
      }
    }
  });
}
