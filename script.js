document.addEventListener("DOMContentLoaded",()=>{
    const cityinput=document.getElementById("city-input");
    const searchbtn=document.getElementById("search-btn");
    const cityname=document.getElementById("cityname");
    const temperature=document.getElementById("temperature");
    const description=document.getElementById("description");
    const errormsg=document.getElementById("errormsg");
    const weatherinfo=document.getElementById("weather-info");

    const API_KEY = "5fd60ca68a30e9241fd35005c12b5e16";
    searchbtn.addEventListener("click",async()=>{
        const city=cityinput.value.trim();
        if(!city) return;
       try {
          const weatherData = await fetchweatherdata(city);
          displayweatherdata(weatherData);
       }catch(error){
        showerror();
       }
});
async function fetchweatherdata(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response=await fetch(url);
    console.log(response);
    if(!response.ok){
        throw new Error("city not found");
    }
    const data = await response.json();
    console.log(data);
    return data;
}
function displayweatherdata(data){
    const {name,main,weather}=data;
    cityname.textContent = name;
    temperature.textContent = `Temperature: ${Math.round(main.temp)}°C`;
    description.textContent = `weather: ${weather[0].description}`;
    weatherinfo.classList.remove("hidden");
    errormsg.classList.add("hidden");


}
function showerror(){
    errormsg.classList.remove("hidden");
    weatherinfo.classList.add("hidden");
}
});
