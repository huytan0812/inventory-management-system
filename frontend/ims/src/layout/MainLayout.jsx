import { Layout } from 'antd';
import React from 'react';
import ImsContent from '../components/ImsContent';
import ImsHeader from '../components/imsHeader';
import { LayoutProvider } from '../contexts/LayoutContext';
import ImsFooter from '../components/ImsFooter';
import ImsSider from '../components/ImsSider';

const MainLayout = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <LayoutProvider>
          <ImsSider />
          <Layout>
            <ImsHeader />
            <ImsContent />
            <ImsFooter />
          </Layout>
        </LayoutProvider>
      </Layout>
    );
}

export default MainLayout;