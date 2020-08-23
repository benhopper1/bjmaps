var express = require('express');
var app = express();
app.listen(8085, function(){
        console.log('running on 8085');
});



app.get('/test', function(req, res){
  res.send('test was called 123');
});








app.get('/', function(req, res){


res.send(`






<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>

<!--         <button id = "find-me">Show my location</button><br/>
        <p id = "status"></p>
        <a id = "map-link" target="_blank"></a> -->


 		<dir>latitude</dir><dir id="latitude">????</dir>
 		<dir>longitude</dir><dir id="longitude">????</dir>



  <script>




function success(position) {
	var latitude  = position.coords.latitude;
	var longitude = position.coords.longitude;

    status.textContent = '';

	console.log(latitude);
	console.log(longitude);

	$('#latitude').html(latitude);
	$('#longitude').html(longitude);
	



  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  /*if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }*/



//document.querySelector('#find-me').addEventListener('click', geoFindMe);

options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);


  </script>
</body>
</html>

`);









});

