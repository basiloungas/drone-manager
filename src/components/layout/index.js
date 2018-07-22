import React from 'react';
import { Row, Col } from 'antd';

import {
  MyLayout,
  MyHeader,
  MyContent,
  MyHeaderText,
} from './styled';

const App = ({children, title}) => {
  return (
    <MyLayout>
      <MyHeader>
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 18, offset: 3 }}
          >
            <MyHeaderText>{title}</MyHeaderText>
          </Col>
        </Row>
      </MyHeader>

      <Row>
        <Col
          xs={{ span: 24, offset: 0 }}
          lg={{ span: 18, offset: 3 }}
        >
          <MyContent>
            {children}
          </MyContent>
        </Col>
      </Row>

    </MyLayout>
  );
};

export default App;