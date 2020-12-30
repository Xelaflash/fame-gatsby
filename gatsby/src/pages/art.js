import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import BrushStroke from '../components/BrushStroke';
import Quote from '../components/home/Quote';

const ArtPageStyle = styled.div`
  /* gallery grid */
  .image-grid {
    display: grid;
    grid-gap: 1rem;
    justify-items: center;
    margin: 0;
    padding: 0;
  }
  .image-grid .image-item:nth-child(5n) {
    grid-column-end: span 2;
  }
  .image-item {
    width: 100%;
    height: 100%;
  }

  .gallery-img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0px 15px 15px rgb(0, 0, 0, 0.4);
    cursor: pointer;
    transition: opacity 0.25s ease-in-out;
    &:hover {
      opacity: 0.9;
    }
  }

  @media (min-width: 576px) {
    .image-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
  /* end gallery grid */

  .artist_list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .artist_name {
    color: var(--white);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
  }
`;

export default function Art({ data }) {
  const bannerImg = data.bannerImg.image.asset.fluid;
  const artists = data.artists.nodes;
  const artGallery = data.artGalleryImgs.nodes;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <ArtPageStyle>
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
              ART is an essential part of human life. Art is infinitely
              adaptable it plays a necessary and immense role in every culture.
              Art is something that reveals the hidden truth. We all need new
              innovative ideas and creative ways to express ourselves, to
              approach, understand and feel others. Art is connecting all of us.
              This is why - We Love F.A.M.E. Team is promoting local artists,
              inviting to come forward and share their artistic expressions and
              crafts with the world… We want to promote Bajan culture and
              support educating children through art, to find fertile ways to
              express their feelings and points of view. Art is a storyteller.
            </p>
            <Quote quote={data.quote4} />
            <p className="paragraphTexts">
              Keep an Eye on our{' '}
              <a
                href="https://www.instagram.com/famefestival_barbados/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline_svg link_white"
              >
                Instagram
              </a>{' '}
              page for Art Posts and join our
              <Link to="/weeklyTalk" className="underline_svg link_white">
                Weekly Talk
              </Link>{' '}
              in which every week a different artists will share her/his
              passion.
            </p>
            <section className="artists">
              <h2 className="title">Fame community artists</h2>
              <BrushStroke />
              <div className="artist_list">
                {/* TODO: put link to creator card in community page */}
                {artists.map((artist, index) => (
                  <div className="single_artist" key={`${index}`}>
                    <Img
                      fluid={artist.image.asset.fluid}
                      alt={`${artist.name} - F.A.M.E Art`}
                      className="avatar"
                    />
                    <p className="artist_name">{artist.name}</p>
                  </div>
                ))}
              </div>
            </section>
            <Quote quote={data.quote5} />

            <section className="art_gallery">
              <h2 className="title">Art Gallery</h2>
              <BrushStroke />
              <div className="art_gallery_grid">
                {artGallery.map((artImg, id) => (
                  <div className="single_artImg" key={`${id}`}>
                    <h4>{artImg.name}</h4>
                    <p>by {artImg.artist.name}</p>
                    <p>{artImg.artDescription}</p>
                    <Img
                      fluid={artImg.image.asset.fluid}
                      alt={`${artImg.name} - F.A.M.E Art`}
                      className=""
                    />
                  </div>
                ))}
                <p>rien</p>
              </div>
            </section>

            <Quote quote={data.quote6} />
          </div>
        </Container>
      </ArtPageStyle>
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
    artGalleryImgs: allSanityArtGallery {
      nodes {
        id
        name
        artDescription
        artist {
          name
        }
        image {
          asset {
            fluid(maxWidth: 1024) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    quote4: sanityQuotes(quoteId: { eq: "Quote4" }) {
      quoteText
      quoteAuthor
    }
    quote5: sanityQuotes(quoteId: { eq: "Quote5" }) {
      quoteText
      quoteAuthor
    }
    quote6: sanityQuotes(quoteId: { eq: "Quote6" }) {
      quoteText
      quoteAuthor
    }
    artists: allSanityCommunityMember(
      filter: { category: { category: { eq: "Art" } } }
    ) {
      nodes {
        name
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
