import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import BrushStroke from '../components/BrushStroke';

export default function art({ data }) {
  const bannerImg = data.bannerImg.image.asset.fluid;
  return (
    <Layout>
      <SEO
        title="Art"
        keywords={[
          'creativity',
          'human expressions',
          'history',
          'therapeutic',
          'healthy',
          'relaxing',
          'imagination',
          'dexterity',
          'educate',
          'sharing',
          'Barbados',
          'Bajan',
        ]}
      />
      <HeroBanner pageTitle="Art" bannerImg={bannerImg} />
      <Container>
        <div>
          <p className="paragraphTexts">
            ART is an essential part of human life. Art is infinitely adaptable
            it plays a necessary and immense role in every culture. Art is
            something that reveals the hidden truth. We all need new innovative
            ideas and creative ways to express ourselves, to approach,
            understand and feel others. Art is connecting all of us. This is why
            - We Love F.A.M.E. Team is promoting local artists, inviting to come
            forward and share their artistic expressions and crafts with the
            world… We want to promote Bajan culture and support educating
            children through art, to find fertile ways to express their feelings
            and points of view. Art is a storyteller.
          </p>
          <p className="paragraphTexts">
            Keep an Eye on our
            <a
              href="https://www.instagram.com/famefestival_barbados/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline_svg link_white"
            >
              Instagram
            </a>{' '}
            page for Art Posts and join our Weekly Talk in which every week a
            different artists will share her/his passion.
          </p>
        </div>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query {
    bannerImg: sanityBannerImgs(name: { eq: "art" }) {
      id
      name
      image {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
