import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={'h1'}>
          React SPA with Webpack and deploy gh-pages !!
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

Layout.propTypes = {
  children: PropTypes.array
};