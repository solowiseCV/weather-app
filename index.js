
const apiKey="d73ca8100ca54a02b7b53d858512aaa2";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
 const imageIcon = document.querySelector(".weatherImg");

const checkWeather= async(city)=>{
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status== 404){
    document.querySelector(".error").style.display= "block";
    document.querySelector(".weather").style.display= "none";
  }else{
  let data = await response.json();  
  document.querySelector(".city").innerHTML =data.name
  document.querySelector(".temp").innerHTML =`${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =data.wind.speed + "Km/hr"; 

 if(data.weather[0].main == "Clouds"){
    imageIcon.src = "images/clouds.png"
 }else if (data.weather[0].main == "Clear"){
    imageIcon.src = "images/clear.png"

 }else if(data.weather[0].main=="Rain"){
    imageIcon.src = "images/rain.png"

 }else if(data.weather[0].main =="Drizzle"){
    imageIcon.src = "images/drizzle.png"

 

}else if(data.weather[0].main =="Snow"){
    imageIcon.src = "images/snow.png"

}else if(data.weather[0].main =="Mist"){
    imageIcon.src = "images/mist.png"

}
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)

})


 