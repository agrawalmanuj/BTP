
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

console.log(data[1]);

var i=0;

console.log(data.length);
var k=0;

for(i=0;i<10;i++){
	
	var list = `<tr>
      <td>${data[i][s1]}</td>
      <td>${data[i].Address}</td>
      <td>${data[i].Mobile}</td>
    </tr>`;
    var p = document.getElementById("t_body");
    p.innerHTML+=list;
    

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

	var p = document.getElementById("t_body");
    p.innerHTML='';

	for(i=0;i<data.length;i++){
		var city=data[i].City;
		city=city.toUpperCase();
		inp=inp.toUpperCase();
		if(city==inp){

			for(var j=0;j<4;j++){
				if(data[i].BG[j]==x){
					console.log(data[i]);
					var list = `<tr>
						      <td>${data[i][s1]}</td>
						      <td>${data[i].Address}</td>
						      <td>${data[i].Mobile}</td>
						    </tr>`;

						p.innerHTML+=list;


				}
			}



		}
	}



}








