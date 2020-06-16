import React from 'react';
import './tile.styles.scss';

const Tile: (props: any) => JSX.Element = (props) => {
  const tiles: any = props.weatherTiles;

  return (
    <div className="tiles">
      <h3 className="city">{tiles.city}</h3>
      <p className="country"></p>
      {tiles.country}
      <h2 className="temperature">{tiles.temperature}</h2>
    </div>
  );
};

export default Tile;
