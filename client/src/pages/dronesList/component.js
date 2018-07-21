import React from 'react';
import GeoImage from '../../components/geoImage';

const renderItem = droneData => {
  const {
    id,
    lat,
    lon,
    velocity,
    lastUpdatedAt,
    stale,
  } = droneData;

  return (
    <li key={id}>
      <p>{id}</p>
      <p>{lat}</p>
      <p>{lon}</p>
      <GeoImage lat={lat} lon={lon}/>
      <p>{`${velocity}km/h`}</p>
      <p>{new Date(lastUpdatedAt).toLocaleString()}</p>
      <p>{stale ? 'Stale' : 'Moving'}</p>
    </li>
  );
};

const Homepage = ({list}) => {
  return (
    <ul>
      { list.map(renderItem) }
    </ul>
  );
};

export default Homepage;
