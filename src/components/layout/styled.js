import styled from 'styled-components';
import { Layout } from 'antd';
const { Header, Content } = Layout;

export const MyLayout = styled(Layout)`
  height: 100vh;
  overflow: auto;
  padding-bottom: 100px;
`;

export const MyHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
`;

export const MyHeaderText = styled.h1`
  color: white;
`;

export const MyContent = styled(Content)`
  padding: 50px;
  margin-top: calc(64px + 50px);
  background: #fff;
`;