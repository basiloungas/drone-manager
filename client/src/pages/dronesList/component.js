import React from 'react';
import GeoImage from '../../components/geoImage';

import { Table } from 'antd';

const tableColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Place',
    render: ({lat, lon}) => (
      <React.Fragment>
        <GeoImage lat={lat} lon={lon}/>
        <dl>
          <dt>Latitude</dt>
          <dd>{lat}</dd>
          <dt>Longitude</dt>
          <dd>{lon}</dd>
        </dl>
      </React.Fragment>
    ),
  },
  {
    title: 'Velocity',
    dataIndex: 'velocity',
    render: velocity => <p>{`${velocity}km/h`}</p>,
  },
  {
    title: 'Updated At',
    dataIndex: 'lastUpdatedAt',
    render: lastUpdatedAt => <p>{new Date(lastUpdatedAt).toLocaleString()}</p>,
  },
  {
    title: 'Stale',
    dataIndex: 'stale',
    render: stale => <p>{stale ? 'Stale' : 'Moving'}</p>,
  },
];

const Homepage = ({list}) => {
  return (
    <React.Fragment>
      <h1>Drone list</h1>
      <Table
        rowKey={record => record.id}
        columns={tableColumns}
        dataSource={list}
        bordered
      />
    </React.Fragment>
  );
};

export default Homepage;
