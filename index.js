let apiKey="7800b59019b14bb737c6cf6e998c5a91";
// var city="udaipur"
async function fetchweatherdata(city){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    let data= await response.json()
    updateWeatherUI(data)
}

let cityElement=document.querySelector(".city")
let temprature=document.querySelector(".temp")
let windspeed=document.querySelector(".wind-speed")
let humidityElement=document.querySelector(".humidity")
let visibilityElement=document.querySelector(".visibility-distance")
let discriptionelement=document.querySelector(".discription-text")
let iconElement=document.querySelector("#ics")
document.querySelector(".date").innerHTML=new Date().toDateString()
function updateWeatherUI(data){
cityElement.textContent=data.name

temprature.textContent=`${Math.round(data.main.temp)}°`
windspeed.textContent=`${data.wind.speed} kmph`
humidityElement.textContent=`${data.main.humidity}%`
visibilityElement.textContent=`${data.visibility / 1000}Km`
let dis=data.weather[0].description
discriptionelement.textContent=`${dis}`
switch (dis) {
            case "clear sky":
                iconElement.textContent= "wb_sunny";
                break;
            case "few clouds":
                iconElement.textContent="cloud"
            case "scattered clouds":
                iconElement.textContent="cloud"
                case "broken clouds":
                iconElement.textContent="cloud_queue";
                break;
            case "overcast clouds":
                iconElement.textContent= "cloud";
                break;
            case "rain":

                iconElement.textContent= "umbrella";
            case "shower rain":
                iconElement.textContent= "umbrella";
                break;
            case "thunderstorm":
                iconElement.textContent= "flash_on";
                break;
            case "snow":
                iconElement.textContent="ac_unit";
                break;
            case "mist":
                iconElement.textContent= "blur_on";
                break;
            default:
                iconElement.textContent= "wb_sunny"; // default icon
                break;
        
}




}
let formElement=document.querySelector(".search-form")
let inputElement=document.querySelector(".city-input")

formElement.addEventListener("submit",(event)=>{
    event.preventDefault()
    let city=inputElement.value
    if(city !== ""){
        fetchweatherdata(city)
        inputElement.value=''
    }
})