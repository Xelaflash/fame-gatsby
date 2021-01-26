import React, { useEffect, useState } from 'react';
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
import ArtModal from '../components/food/ArtImgModal';
import FamePeople from '../components/FamePeople';

const ArtPageStyle = styled.div`
  /* Masonry grid */
  .art_gallery_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    transition: all 0.5s ease-in-out;
  }

  @media (min-width: 812px) {
    .art_gallery_grid {
      grid-gap: 1rem;
    }
    .art_gallery_grid .gallery_brick:nth-child(5n) {
      grid-column-end: span 2;
    }
  }

  /* Masonry item */
  .gallery_brick {
    position: relative;
    cursor: pointer;
    .art_img {
      box-shadow: 0px 15px 15px rgb(0, 0, 0, 0.4);
      border-radius: 4px;
      width: 100%;
      height: 100%;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: all 0.5s ease;
    background-color: var(--blueGrey);
    border-radius: 4px;
    visibility: hidden;
  }

  .gallery_brick:hover .overlay {
    opacity: 1;
    visibility: visible;
  }

  .overlay_text {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
  }
  .overlay-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function Art({ data }) {
  const bannerImg = data.bannerImg.image.asset.fluid;
  const artGallery = data.artGalleryImgs.nodes;

  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const selectModal = (item) => {
    setActiveItem(item);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setActiveItem('');
    setShowModal(!showModal);
  };

  const totalItems = artGallery.length - 1;
  const itemIndex = artGallery.indexOf(activeItem);
  const prevGalleryItem = itemIndex - 1;
  const nextGalleryItem = itemIndex + 1;
  const hasNextItem = nextGalleryItem <= totalItems;
  const hasPrevItem = prevGalleryItem >= 0;

  const nextItem = () => {
    const nextIndex = itemIndex + 1;
    const nextItemData = artGallery[nextIndex];
    setActiveItem(nextItemData);
  };

  const prevItem = () => {
    const prevIndex = itemIndex - 1;
    const prevItemData = artGallery[prevIndex];
    setActiveItem(prevItemData);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if (showModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [showModal]);

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
          <Quote quote={data.quote5} />
          <section className="art_gallery">
            <h2 className="title">Art Gallery</h2>
            <BrushStroke />
            <div className="art_gallery_grid">
              {artGallery.map((artImg, id) => (
                <div
                  className="gallery_brick"
                  key={id}
                  onClick={() => selectModal(artImg)}
                  onKeyPress={() => selectModal(artImg)}
                  role="button"
                  tabIndex={0}
                  data-target="#artModal"
                  data-toggle="modal"
                >
                  <Img
                    fluid={artImg.image.asset.fluid}
                    alt={`${artImg.name} - F.A.M.E Art`}
                    className="art_img"
                  />
                  <div className="overlay">
                    <div className="overlay-inner">
                      <Img
                        fluid={artImg.artist.image.asset.fluid}
                        alt={`${artImg.artist.name} - F.A.M.E Artist`}
                        className="avatar"
                      />
                      <p className="overlay_text">{artImg.artist.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ArtModal
              displayModal={showModal}
              closeModal={closeModal}
              activeItem={activeItem}
              nextItem={nextItem}
              prevItem={prevItem}
              hasNextItem={hasNextItem}
              hasPrevItem={hasPrevItem}
            />
          </section>
          <FamePeople
            communityMembers={data.artists.nodes}
            jobTitle="artists"
          />
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
          image {
            asset {
              fluid(maxWidth: 300) {
                ...GatsbySanityImageFluid
              }
            }
          }
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
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
