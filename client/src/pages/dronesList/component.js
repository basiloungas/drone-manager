import React from 'react';
import GeoImage from '../../components/geoImage';

import { Table, Alert } from 'antd';

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
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.lastUpdatedAt - b.lastUpdatedAt,
    render: lastUpdatedAt => <p>{new Date(lastUpdatedAt).toLocaleString()}</p>,
  },
  {
    title: 'Stale',
    dataIndex: 'stale',
    render: stale => stale ? <Alert message="Stale" type="error" /> : <Alert message="Moving" type="success" />,
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
        pagination={false}
      />
    </React.Fragment>
  );
};

export default Homepage;
