import React from 'react';
import Layout from './src/components/Layout';
import HomeLayout from './src/components/HomeLayout';

export function wrapPageElement({ element, props }) {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  if (url === '/') {
    return <HomeLayout {...props}>{element}</HomeLayout>;
  }
  return <Layout {...props}>{element}</Layout>;
}
