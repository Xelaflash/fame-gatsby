import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BrushStroke from '../components/BrushStroke';

export default function FestivalPage() {
  return (
    <Layout>
      <SEO
        title="Festival"
        keywords={['music', 'fame festival', 'Barbados', 'community']}
      />
      <Container>
        <h1 className="title">Festival</h1>
        <BrushStroke />
      </Container>
    </Layout>
  );
}
