import React, { useState } from 'react';
import './dashboard.styles.scss';
import Search from '../search-component/search.component';
import Tile from '../tile-component/tile.component';

const Dashboard: () => JSX.Element = () => {
  const [weather, getWeather] = useState<never[]>([]);

  return (
    <div className="dashboard">
      <Search weatherInfo={getWeather} />
      {getWeather && <Tile weatherTiles={weather} />}
    </div>
  );
};

export default Dashboard;
