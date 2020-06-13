import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const API_KEY: string = '37d4f7e37e1265a47543c5014f2be65c';

const Search: (props: any) => JSX.Element = (props) => {
  const [searchInput, setSearchInput] = useState('');

  const fetchData: () => Promise<void> = async () => {
    const response: AxiosResponse<any> = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${API_KEY}`
    );
    console.log('Response:', response.data);
    console.log(`Temperature: ${response.data.main.temp}°C`);
    console.log('City:', response.data.name);
    props.weatherInfo(response.data);
  };

  return (
    <div className="search-component">
      <label htmlFor="">Search for weather forecast in your city!</label>
      <br />
      <input
        type="text"
        placeholder="City..."
        value={searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value)
        }
      />
      <button onClick={fetchData}>Search</button>
    </div>
  );
};

export default Search;
