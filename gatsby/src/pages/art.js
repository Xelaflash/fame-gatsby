import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import Gallery from 'react-photo-gallery';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import BrushStroke from '../components/BrushStroke';
import Quote from '../components/home/Quote';

const ArtPageStyle = styled.div`
  /* gallery grid */
  .art_gallery_grid img {
    box-shadow: 0px 15px 15px rgb(0, 0, 0, 0.4);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
      opacity: 0.8;
    }
  }
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

function ArtModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Art({ data }) {
  const bannerImg = data.bannerImg.image.asset.fluid;
  const artists = data.artists.nodes;
  const artGallery = data.artGalleryImgs.nodes;

  const galleryPhotos = artGallery.map((artImg) => ({
    src: artImg.image.asset.url,
    width: artImg.image.asset.metadata.dimensions.width,
    height: artImg.image.asset.metadata.dimensions.height,
  }));

  const [modalShow, setModalShow] = useState(false);
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
            in which every week a different artists will share her/his passion.
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
              <Gallery
                photos={galleryPhotos}
                direction="column"
                margin={5}
                onClick={() => setModalShow(true)}
              />
              <ArtModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </section>

          <Quote quote={data.quote6} />
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
            url
            metadata {
              dimensions {
                height
                width
              }
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
