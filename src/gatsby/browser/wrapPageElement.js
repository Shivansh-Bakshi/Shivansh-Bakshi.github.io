import React from 'react';
import Layout from '../../components/layout';

const PersistentLayout = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

export default PersistentLayout;