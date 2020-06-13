import React from 'react';

const Tile: (props: any) => JSX.Element = (props) => {
  const tiles = props.weatherTiles;
  return (
    <>
      {tiles.city} <br />
      {tiles.temperature} <br />
      {tiles.country}
    </>
  );
};

export default Tile;
