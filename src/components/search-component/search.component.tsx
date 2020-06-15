import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './search-component.scss';

const API_KEY: string = '37d4f7e37e1265a47543c5014f2be65c';

const Search: (props: any) => JSX.Element = (props) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const fetchData: () => Promise<void> = async () => {
    const response: AxiosResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${API_KEY}`
    );
    console.log('Response:', response.data);
    console.log(`Temperature: ${response.data.main.temp}°C`);
    console.log('City:', response.data.name);
    await props.weatherInfo({
      city: response.data.name as string,
      country: response.data.sys.country as string,
      temperature: `${response.data.main.temp} °C` as string,
    });
  };

  return (
    <div className="search">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <label htmlFor="search-message">
          Search for weather forecast in your city!
        </label>
        <br />
        <input
          type="text"
          required
          placeholder="City..."
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
        />
        <button onClick={fetchData}>Search</button>
      </form>
    </div>
  );
};

export default Search;
