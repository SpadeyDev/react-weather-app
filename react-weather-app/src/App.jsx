import { useState } from "react";
import Main from "./components/Main";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const SearchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="bg-gray-200 w-full h-screen relative">
      <div className="text-center p-4 mb-10">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={SearchLocation}
        />
      </div>
      <Main weatherData={data} />
    </div>
  );
}

export default App;
