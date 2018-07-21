import React from 'react';

const GeoImage = ({lat, lon, width=200, height=100}) => {
  const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
  const params = Object
    .entries({
      center: `${lat},${lon}`,
      zoom: 15,
      size: `${2 * width}x${2 * height}`,
      mapType: 'roadmap',
      markers: `color:red%7C${lat},${lon}`,
      key: 'AIzaSyAOz_ffmAFN181wrceKISiCPLlcNv55HDY',
    })
    .map( ([key, value]) => `${key}=${value}` )
    .join('&');

  return (
    <img
      src={`${baseUrl}?${params}`}
      width={width}
      height={height}
      alt="geo location"
    />
  );
};

export default GeoImage;
