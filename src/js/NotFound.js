import React from 'react';
import { Icon } from 'semantic-ui-react';

import Layout from './Layout';

const NotFound = () => {
  return (
    <Layout>
      <Icon name="minus circle" size="small" color="red" />
      <strong>Page not found!</strong>
    </Layout>
  );
};

export default NotFound;