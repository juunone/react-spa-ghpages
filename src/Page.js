import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Page = () => {
  return (
    <Layout>
      <h2>또다른 페이지로 왔어요!</h2>
      <p>
        <Link to="/NotFound">Navigate to 404 Not found</Link>
      </p>
    </Layout>
  );
};

export default Page;