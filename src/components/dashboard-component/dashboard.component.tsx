import React, { useState } from 'react';

import Search from '../search-component/search.component';
import Tile from '../tile-component/tile.component';

const Dashboard: () => JSX.Element = () => {
  const [weather, getWeather] = useState([]);

  return (
    <div className="dashboard">
      <Search weatherInfo={getWeather} />
      <Tile weatherTiles={weather} />
    </div>
  );
};

export default Dashboard;
