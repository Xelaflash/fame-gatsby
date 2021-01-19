import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import Layout from '../components/Layout';
import FamePeople from '../components/FamePeople';
import BrushStroke from '../components/BrushStroke';

const EnvironmentPageStyle = styled.div`
  ul {
    width: 70%;
    margin: auto;
  }
`;

export default function environment({ data }) {
  const bannerImg = data.bannerImg.image.asset.fluid;
  return (
    <Layout>
      <EnvironmentPageStyle>
        <SEO
          title="Environment"
          keywords={[
            'beats',
            'inner & outer environments',
            'nature',
            'fertile',
            'ecological',
            'sustainable',
            'yoga',
          ]}
        />
        <HeroBanner pageTitle="Environment" bannerImg={bannerImg} />
        <Container>
          <div>
            <p className="paragraphTexts">
              ENVIRONMENT is the place we live in. Both inside and outside of
              our bodies. <br />
              In order to live a happy and healthy life we have to understand
              the need for each of us to live sustainably and responsibly. It's
              a challenge that brings opportunities for all. <br />
              We are responsible for the future of our children. We have to
              learn new ways to live in harmony with our environments.
              Humanity's entire life-support system depends on the well-being of
              all species living on Earth. <br />
              This is why the FAME Team is dedicating itself to the environment
              and its protection, through <strong>educating</strong>,{' '}
              <strong>inspiring by example</strong>,{' '}
              <strong>raising awareness</strong>, and encouraging individual and
              community participation. <br />
              <strong>
                Our philosophy : Protect your environment to better yourself!
              </strong>
            </p>
          </div>
          <section className="inner-environment">
            <h2 className="title">Inner Environment</h2>
            <BrushStroke />
            <p className="paragraphTexts">
              For our inner environment good vibrations are vital. To work inner
              environment Barbados has a lot to offer.
            </p>
            <ul>
              <li>Meditation</li>
              <li>Yoga</li>
              <li>TaiChi</li>
              <li>Bowspring training</li>
              <li>Gong Therapy</li>
            </ul>
          </section>
          <section className="outer-environment">
            <h2 className="title">Outer Environment</h2>
            <BrushStroke />
          </section>
          <FamePeople
            communityMembers={data.environmentalists.nodes}
            jobTitle="environmentalists"
          />
        </Container>
      </EnvironmentPageStyle>
    </Layout>
  );
}

export const query = graphql`
  query {
    bannerImg: sanityBannerImgs(name: { eq: "environment" }) {
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
    environmentalists: allSanityCommunityMember(
      filter: { category: { category: { eq: "Environment" } } }
    ) {
      nodes {
        name
        image {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
