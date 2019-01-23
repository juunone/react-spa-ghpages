import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Hello World!</p>
      <p>
        <Link to="/page">페이지 이동</Link>
      </p>
    </Layout>
  );
};

export default Home;