import React from 'react';

import Layout from './components/layout';
import DroneList from './pages/dronesList';

const App = () => {
  return (
    <Layout title="Welcome to the Drone Manager">
      <DroneList />
    </Layout>
  );
};

export default App;