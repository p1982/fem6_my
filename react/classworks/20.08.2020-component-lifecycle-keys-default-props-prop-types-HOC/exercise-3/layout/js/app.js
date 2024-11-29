 var locations = ["tatooine","hoth","endor","geonosis","bespin","naboo","kashyyyk","coruscant","dagobah"]
 
locations.sort()

function color(){
return "hsl("+Math.floor(Math.random()*360)+"deg,100%,40%)"
}

for(var i=0;i<locations.length;i++) {
  var request = new XMLHttpRequest()

request.open('GET', "https://swapi.dev/api/planets/?search="+locations[i]+"", false)

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  // console.log(data)  
  
  //build planets
  for(var prop in data.results) {
    var planetBox = document.createElement('div')
    planetBox.className = "planetBox"
    
    var div = document.createElement('div')
    div.id = data.results[prop].name
    div.className = "planet"
    div.style.background = "radial-gradient(circle at 33% 66%,"+color()+","+color()+")"
    div.innerHTML = data.results[prop].name
    
    var info = document.createElement('div')
    info.className = "info"
    info.innerHTML = "<br><br><br><br>Diameter: "+data.results[prop].diameter+"km<br>Terrain: "+data.results[prop].terrain.split(",")[0]+"<br>Population: "+data.results[prop].population
        
    document.getElementsByTagName('body')[0].appendChild(planetBox).append(div,info)
  }
}

request.send()
}
