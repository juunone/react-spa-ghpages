import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Page = () => {
  return (
    <Layout>
      <h2>또다른 페이지로 왔어요!</h2>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </Layout>
  );
};

export default Page;