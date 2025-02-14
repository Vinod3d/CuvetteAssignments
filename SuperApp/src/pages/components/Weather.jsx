import { useEffect, useState } from "react";
import fetchWeatherApi from "../../api/fetchWeather";
import formatDate from "../../utils/formateDate";
const Weather = () => {
  const [weather, setWeather] = useState({});
  const [dateTime, setDateTime] = useState({});

  const { temp_c, condition, pressure_mb, wind_kph, humidity } = weather;

  useEffect(() => {
    fetchWeatherApi().then((data) => {
      setWeather(data.current);
    });

    const { date, time } = formatDate(weather?.last_updated);
    setDateTime({ date, time });
  }, []);

  return (
    <div className="bg-[#1E2343] rounded-2xl weather mt-4 overflow-hidden">
      <div className="flex  gap-4 justify-between bg-pink-400 p-4 text-3xl px-28">
        <span className="text-white ">{dateTime?.date}</span>
        <span className="text-white">{dateTime?.time}</span>
      </div>
      <div className="flex justify-between mt-2 p-9 ">
        <div className="border-r-2 border-gray-400 px-10 text-white flex flex-col gap-4 items-center">
          <img src={condition?.icon} alt="" className="h-10 w-10" />
          <span className="text-muted-foreground">{condition?.text}</span>
        </div>
        <div className="border-r-2 border-gray-400 px-10 flex flex-col text-center gap-3 text-white">
          <span className=" text-4xl">{temp_c}°C</span>
          <span className="">{pressure_mb} mbar presser</span>
        </div>
        <div className="px-10 flex flex-col items-center justify-center text-white">
          <span className="">{wind_kph} km/h Wind</span>
          <span className="">{humidity}% Humidity</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
