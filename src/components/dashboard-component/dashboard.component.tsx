import React, { useState } from 'react';
import Search from '../search-component/search.component';
import Tile from '../tile-component/tile.component';

const Dashboard: () => JSX.Element = () => {
  const [weather, getWeather] = useState([]);

  return (
    <>
      <Search weatherInfo={getWeather} />
      <Tile weatherTiles={weather} />
    </>
  );
};

export default Dashboard;
