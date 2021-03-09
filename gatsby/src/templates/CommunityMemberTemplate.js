import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import BrushStroke from '../components/BrushStroke';

export default function SingleCommunityMemberPage({ data: { member } }) {
  return (
    <Layout>
      <SEO title={member.name} image={member.image?.asset?.fluid?.src} />
      <Container>
        <h2>Test</h2>
      </Container>
    </Layout>
  );
}
// this query needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  # slug variable is coming from gatsby-node context
  query($slug: String!) {
    member: sanityCommunityMember(slug: { current: { eq: $slug } }) {
      id
      name
      biography
      business
      contactMedium
      facebook
      instagram
      category {
        category
      }
      image {
        asset {
          fluid(maxHeight: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
