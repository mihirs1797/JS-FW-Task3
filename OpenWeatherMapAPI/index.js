var latlong = new XMLHttpRequest; // creating an instance of XMLHttpRequest
var byCity = new XMLHttpRequest;
var cityID = new XMLHttpRequest;
// does not open a connection instead prepares data to be sent
latlong.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=20&lon=77&appid=3ce1c849f7784212f2497377c2ef5afa',true);
byCity.open('GET','https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=3ce1c849f7784212f2497377c2ef5afa',true);
cityID.open('GET','https://api.openweathermap.org/data/2.5/weather?id=1277333&appid=3ce1c849f7784212f2497377c2ef5afa',true);
//send a request

latlong.send();
byCity.send();
cityID.send();

//load the response

latlong.onload = function(){
    let data = JSON.parse(this.response);
    console.log(data);
}

byCity.onload = function(){
    let data = JSON.parse(this.response);
    console.log(data);     
}

cityID.onload = function(){
    let data = JSON.parse(this.response);
    console.log(data);     
}