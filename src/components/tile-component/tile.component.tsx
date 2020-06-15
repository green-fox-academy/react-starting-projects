import React from 'react';
import './tile.styles.scss';

const Tile: (props: any) => JSX.Element = (props) => {
  const tiles: any = props.weatherTiles;

  return (
    <div className="tiles">
      {tiles.city} <br />
      {tiles.temperature} <br />
      {tiles.country}
    </div>
  );
};

export default Tile;
