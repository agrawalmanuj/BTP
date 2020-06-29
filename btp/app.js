
/*var map=null;
$('#myModal').on('show.bs.modal', function(){
  setTimeout(function() {
    map.invalidateSize();
  }, 10);
 });*/

/*var map = null;
  var myMarker;
  var myLatlng;
$('#myModal').on('shown.bs.modal', function() {
    google.maps.event.trigger(map, "resize");
    map.setCenter(myLatlng);
  });*/




/*function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: 'Chicago, IL',
  destination: 'Los Angeles, CA',
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }*/

      var ulati;
      var ulngi;

      if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
  //x.innerHTML = "Latitude: " + position.coords.latitude + 
  //"<br>Longitude: " + position.coords.longitude;

  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  ulati=position.coords.latitude;
  ulngi=position.coords.longitude;
}


function getMap(lati,lngi){
//console.log(lati);
 //console.log(lngi);
 

 //var directionsService = new google.maps.DirectionsService;
 //var directionsDisplay = new google.maps.DirectionsRenderer;

  var uluru = {lat: lati, lng: lngi};
  
   map = new google.maps.Map(
      document.getElementById('inst'), {zoom: 4, center: uluru});

   //directionsDisplay.setMap(map);

 
  
  var marker = new google.maps.Marker({position: uluru, map: map});
  
  //calculateAndDisplayRoute(directionsService, directionsDisplay);
 




}

function initMap(lati,lngi) {


/*document.getElementById('weathermap').innerHTML = `<div id='inst' style='width: 100%; height: 500px;'></div>
<button type="button" class="close" data-dismiss="modal">&times;</button>`;*/
/*map = L.map('inst').setView([lati,lngi], 5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lati,lngi]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();*/

    document.getElementById('tot').innerHTML = "<div id='mapid' style='width: 100%; height: 530px;'></div>";

                //console.log(lati);
                //console.log(lngi);
                    var dir,map;

                map = L.map('mapid', {
                    layers: MQ.mapLayer(),
                    center: [ ulati, ulngi ],
                    zoom: 9
                });
                
                

                dir = MQ.routing.directions();

                dir.optimizedRoute({
                    locations: [
                        { latLng: { lat: lati, lng: lngi }},
                        { latLng: { lat: ulati, lng: ulngi }},
                        
                    ]
                });

                map.addLayer(MQ.routing.routeLayer({
                    directions: dir,
                    fitBounds: true
                }));

L.marker([ulati,ulngi]).addTo(map)
    .bindPopup('Your Location')
    .openPopup();

//getMap(lati,lngi);
 
 
}



var data;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
       
       data=JSON.parse(xhttp.responseText);
       

    }
};
xhttp.open("GET", "bb.json", false);
xhttp.send();
var s1="Blood Bank Name";
//console.log(document.getElementById('inst'));
console.log(document.getElementById('inst'));
console.log(data[1]);

var i=0;

console.log(data.length);
var k=0;

for(i=0;i<10;i++){
	
	/*var list = `<tr>
      <td>${data[i][s1]}</td>
      <td>${data[i].Address}</td>
      <td>${data[i].Mobile}</td>
    </tr>`;*/
    var lati=data[i].Latitude;
    var langi=data[i].Longitude;
    var list2 = `<div class="col-md-4 mt-4 d-flex align-items-stretch">
    <div class="card" style="border-color: #f5b042;">
      <div class="card-body">
        
        <p class="card-text"><b>Blood Bank Name:</b> ${data[i][s1]}</p>
		<p class="card-text"><b>Address:</b> ${data[i].Address}</p>
		<p class="card-text"><b>Contact:</b> ${data[i].Mobile}</p>
		<a href="" data-toggle="modal" data-target="#myModal" onclick="initMap(${data[i].Latitude},${data[i].Longitude})"><b>Get direction:</b></a>
        
      </div>
    </div>
  </div>`
    //var p = document.getElementById("t_body");
    var q=document.getElementById("c_body");
    //p.innerHTML+=list;
    q.innerHTML+=list2;

}

/*var e = document.getElementById("blood-group");
var x=e.options[e.selectedIndex].text;
console.log(x);*/
var x=document.getElementById("blood-group").value;
console.log(x);

function myFunction() {
  x = document.getElementById("blood-group").value;
  //document.getElementById("demo").innerHTML = "You selected: " + x;
  console.log(x);
}
var inp="jaipur";
function getData(){
	inp=document.getElementById("city-input").value;
	console.log(inp);
	console.log(x);

	//var p = document.getElementById("t_body");
	var q=document.getElementById("c_body");
    //p.innerHTML='';
    q.innerHTML='';

	for(i=0;i<data.length;i++){
		var city=data[i].City;
		city=city.toUpperCase();
		inp=inp.toUpperCase();
		if(city==inp){

			for(var j=0;j<4;j++){
				if(data[i].BG[j]==x){
					//console.log(data[i]);
					var lati=data[i].Latitude;
    				var langi=data[i].Longitude;
					//console.log(lati);
					//console.log(langi);
					var list2 = `<div class="col-md-4 mt-4 d-flex align-items-stretch">
								    <div class="card">
								      <div class="card-body">
								        
								        <p class="card-text"><b>Blood Bank Name:</b> ${data[i][s1]}</p>
										<p class="card-text"><b>Address:</b> ${data[i].Address}</p>
										<p class="card-text"><b>Contact:</b> ${data[i].Mobile}</p>
								        <a href="" data-toggle="modal" data-target="#myModal" onclick="initMap(${data[i].Latitude},${data[i].Longitude})"><b>Get direction:</b></a>
								      </div>
								    </div>
								  </div>`

						
						q.innerHTML+=list2;


				}
			}



		}
	}



}








