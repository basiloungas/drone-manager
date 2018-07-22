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
    render: velocity => velocity === null ? <p>--</p> : <p>{`${velocity}km/h`}</p>,
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.updatedAt - b.updatedAt,
    render: updatedAt => <p>{new Date(updatedAt).toLocaleString()}</p>,
  },
  {
    title: 'State',
    dataIndex: 'stale',
    render: stale => stale ? <Alert message="Stale" type="error" /> : <Alert message="Active" type="success" />,
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
