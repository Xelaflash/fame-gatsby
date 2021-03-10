import React from 'react';

import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import Layout from '../components/Layout';
import FamePeople from '../components/FamePeople';

export default function MusicPage({ data }) {
  const bannerImg = data.bannerImg.image.asset.fluid;
  return (
    <Layout>
      <SEO
        title="Music"
        keywords={[
          'beats',
          'healing',
          'emotional',
          'high vibration',
          'universal language',
          'creative',
          'harmony',
          'rhythms',
          'peace',
          'Barbados',
          'Bajan',
        ]}
      />
      <HeroBanner pageTitle="Music" bannerImg={bannerImg} />
      <Container>
        <div>
          <p className="paragraphTexts">
            MUSIC surrounds us, in nature, song, or in rhythmic beats of
            machinery. It is known as the universal language because it has the
            ability to transcend mere words. Music is the expression of the
            soul, it brings people together sharing pain, joy and excitement.{' '}
            <br /> We discovered so many talented artists in Barbados and our
            goal is to push Bajan culture. <br />
            This is why the F.A.M.E. Team selected for their gatherings,
            talented headliners who were joining forces with locals to promote
            and feature Bajan musicians. Giving them the stage to share their
            passion and develop a new audience. <br />
            The <strong>FAME Festival & Pop Ups</strong> line-up is an eclectic
            and inclusive showcasing of artistes: from{' '}
            <strong>gospel, afro-beat, reggae, and soca</strong>, to{' '}
            <strong>sunny funky house music</strong>
            … <br />
            Open to all music lovers. Music is the healing of the nation !
          </p>
        </div>
        <FamePeople
          communityMembers={data.musicians.nodes}
          jobTitle="musicians"
        />
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query {
    bannerImg: sanityBannerImgs(name: { eq: "music" }) {
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
    musicians: allSanityCommunityMember(
      filter: { category: { category: { eq: "Music" } } }
    ) {
      nodes {
        name
        slug {
          current
        }
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
