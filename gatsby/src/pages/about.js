import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BrushStroke from '../components/BrushStroke';

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About us" keywords={['Fame', 'Barbados', 'community']} />
      <Container>
        <h1 className="title">About Us</h1>
        <BrushStroke />
      </Container>
    </Layout>
  );
}
