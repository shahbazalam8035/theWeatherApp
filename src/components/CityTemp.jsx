import React, { useState, useEffect } from "react";

const CityTemp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");

  useEffect(() => {
    const fetchApi = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eb951849ec8e134050e4d3f6b0e2a491`;
      const response = await fetch(URL);
      const resJson = await response.json();
      console.log(resJson.main);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-slate-400 flex-wrap pt-10">
        <div className="bg-slate-300 rounded-xl ">
            <div className="text-center m-2 p-2">
                <h1 className="">Search Country or City Temperature....</h1>
            </div>
          <div className="flex justify-center m-3">
            <input
              type="search"
              className="p-2 rounded-xl"
              placeholder="Search Country or City"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          {!city ? (
            <p className="text-center text-red-500">Not found</p>
          ) : (
            <>
              <div className="text-center">
                <h1 className="text-3xl capitalize">{search}</h1>
                <h2 className="text-3xl">
                  {city.temp}
                  <span> ℃el</span>
                </h2>
                <div className="flex justify-center text-gray-500 text-sm m-3">
                <h4 className=""><span className="px-2">min:{city.temp_min}℃el</span>|<span className="px-2">max:{city.temp_max}℃el</span></h4> 
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CityTemp;
