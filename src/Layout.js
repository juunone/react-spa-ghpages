import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './Layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={'h1'}>
          React SPA with CRA and deploy ghpages
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={'pull-right'}>
        Made with <Icon name="heart" color="red" /> by juunone
      </p>
    </Container>
  );
};

export default Layout;