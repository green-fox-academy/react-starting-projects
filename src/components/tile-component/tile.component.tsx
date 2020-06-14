import React from 'react';

import './tile.component.scss';

const Tile: (props: any) => JSX.Element = (props) => {
  const tiles = props.weatherTiles;

  return (
    <div className="tiles">
      {tiles.city} <br />
      {tiles.temperature} <br />
      {tiles.country}
    </div>
  );
};

export default Tile;

// {remaining === 0 ? (
//   <span className="product-sold-out">Sold Out</span>
// ) : (
//   <span className="product-remaining">{remaining} remaining</span>
// )}
