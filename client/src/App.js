import React from 'react';
import { Layout } from 'antd';

import DroneList from './pages/dronesList';

const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <h1> Welcome to the Drone Manager</h1>
      </Header>
      <Layout>
        <Sider />
        <Content>
          <DroneList />
        </Content>
        <Sider />
      </Layout>
    </Layout>
  );
};

export default App;
