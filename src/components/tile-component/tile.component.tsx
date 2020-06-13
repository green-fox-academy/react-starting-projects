import React from 'react';

const Tile: (props: any) => JSX.Element = (props) => {
  return <div className="tile">City: {props.weatherTiles.name}</div>;
};

export default Tile;
