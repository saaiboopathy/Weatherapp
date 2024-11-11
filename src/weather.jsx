import axios from "axios";
import { useState } from "react";

function Weatherreport() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("");

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    function handleWeather() {
        var weatherdata = axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a58f194100107016f357df88a1431b2`
        );

        weatherdata
            .then(function (success) {
                setWeather(success.data.weather[0].main);
                setDesc(success.data.weather[0].description);
                setTemperature(success.data.main.temp_max);
            })
            .catch(function () {
                console.log("Unsuccessful");
            });
    }

    return (
        <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-gray-800">
                <h1 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-300">
                    Weather Report
                </h1>
                <p className="text-gray-600 italic mb-6">
                    Get the latest weather updates for your city.
                </p>
                
                <div className="flex flex-col gap-3 mb-6">
                    <input
                        onChange={handleChange}
                        placeholder="Enter city name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        type="text"
                    />
                    <button
                        onClick={handleWeather}
                        className="bg-blue-600 text-white p-2 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                        Get Report
                    </button>
                </div>
                
                <div className="space-y-2 mt-6">
                    <div className="text-xl font-semibold">Weather Details:</div>
                    <p className="text-gray-700">
                        <span className="font-semibold">Weather:</span> {weather || "N/A"}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Temperature:</span> {temperature ? `${temperature}°C` : "N/A"}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Description:</span> {desc || "N/A"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Weatherreport;
