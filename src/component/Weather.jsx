import { useEffect, useState } from "react";
import Search from "./Search";


const Weather = () => {

  const key = import.meta.env.VITE_API_KEY;
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherdata, setWeatherdata] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${key}`
      );

      const data = await response.json();
      if (data && data.cod===200) {
        setWeatherdata(data);
        setLoading(false);
      }
      else {
        alert(`Error: ${data.message}`)
      }
      console.log(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }
  console.log(loading);

  function getCurrentData() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData('Chennai');
  }, []);
  console.log(weatherdata);

const convertToKelvinToCelsius = (tempinKelvin) => {
  if (tempinKelvin) {
    // Conversion formula: Celsius = (Fahrenheit - 32) * 5/9
    const tempInCelsius = (tempinKelvin - 273.15);
    return tempInCelsius.toFixed(2); // Round to two decimal places
  }
  return null;
};

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="text-lg  text-black">Loading ...</div>
      ) : (
        <div>
          <div className="mb-8 font-bold text-2xl">
            <h2>
              {weatherdata?.name}, <span>{weatherdata?.sys?.country}</span>
            </h2>
          </div>
          <div className="text-[18px] italic font-semibold">
            <span>{getCurrentData()}</span>
          </div>
          <div className="text-4xl font-bold text-center text-black my-3">
            {convertToKelvinToCelsius(weatherdata?.main?.temp)}°C
          </div>
          <p className="text-black text-2xl capitalize ">
            {weatherdata && weatherdata.weather && weatherdata.weather[0]
              ? weatherdata.weather[0].description
              : ""}
          </p>
          <div className="flex-row md:flex space-x-4 p-5 align-center text-center justify-evenly text-lg">
            <div className="flex-row space-y-2 border-4 border-blue-900 p-5">
              <p className="font-bold text-3xl">{weatherdata?.wind?.speed}</p>
              <p className="font-semibold">Wind Speed</p>
            </div>
            <div>
              <div className="flex-row space-y-2 mr-5 mt-5 border-4 border-cyan-800 p-5">
                <p className="font-bold text-2xl">
                  {weatherdata?.main?.humidity}
                </p>
                <p className="font-semibold">Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
