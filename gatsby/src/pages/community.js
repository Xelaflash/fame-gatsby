import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BrushStroke from '../components/BrushStroke';

export default function CommunityPage() {
  return (
    <Layout>
      <SEO
        title="Community"
        keywords={['people', 'fame', 'Barbados', 'community']}
      />
      <Container>
        <h1 className="title">Community</h1>
        <BrushStroke />
      </Container>
    </Layout>
  );
}
