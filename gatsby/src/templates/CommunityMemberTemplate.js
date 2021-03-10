import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import BrushStroke from '../components/BrushStroke';
import MemberIconBlack from '../components/community/memberIconBlack';

const MemberPageStyle = styled.div`
  margin: 40px auto;
  .member_title {
    font-size: 3em;
    margin-top: 40px;
    color: white;
    text-align: center;
  }
  .member_wrapper {
    position: relative;
  }

  .member_cat {
    display: flex;
    align-items: end;
    justify-content: center;
    margin: 10px auto;
    h3 {
      font-size: 28px;
      letter-spacing: 2px;
      margin: 0 10px;
      text-shadow: 1px 0px 1px white;
    }
  }

  .member_business {
    margin: 40px auto;
    padding: 15px 40px;
    text-align: center;
    border-radius: 50px;
    color: white;
    background: #3e7520;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: lighter;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    max-width: 320px;
  }

  .member_pic-wrapper {
    margin: 20px auto;
    width: fit-content;
  }

  .member_pic {
    border-radius: 5px;
    z-index: 10;
    box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
  }

  .member_social-wrapper {
    width: fit-content;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .member_social {
    position: relative;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 0 10px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  }

  .member_socials-link {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }

  .member_social-icon {
    font-size: 1.5em;
    transition: all 0.3s;
    color: black;
  }

  .member_social:hover {
    .member_social-icon {
      color: white;
    }
  }

  .member_infos {
    p {
      font-size: 18px;
      line-height: 1.7;
      margin: 20px auto;
    }
    span {
      font-weight: bold;
      text-decoration: underline;
    }
  }
  @media (min-width: 812px) {
    .member_flex-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .member_infos {
      max-width: 75%;
      margin: auto;
    }
  }
`;

export default function SingleCommunityMemberPage({ data: { member } }) {
  return (
    <Layout>
      <SEO title={member.name} image={member.image?.asset?.fluid?.src} />
      <Container>
        <MemberPageStyle>
          <h1 className="member_title centered">{member.name}</h1>
          <BrushStroke />
          <div className="member_wrapper">
            <div className="member_flex-wrapper">
              <div className="member_flex-left">
                <div className="member_pic-wrapper">
                  <Img
                    fixed={member.image.asset.fixed}
                    alt={member.name}
                    className="member_pic"
                  />
                </div>
              </div>
              <div className="member_details">
                <div className="member_cat">
                  <MemberIconBlack member={member} />
                  <h3>{member.category.category}</h3>
                  <MemberIconBlack member={member} />
                </div>
                <div className="member_business">{member.business}</div>
                <div className="member_social-wrapper">
                  <div className="member_social">
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member_socials-link"
                    >
                      <FaFacebookSquare className="member_social-icon" />
                      <span className="sr-only">Facebook link</span>
                    </a>
                  </div>
                  <div className="member_social">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member_socials-link"
                    >
                      <FaInstagram className="member_social-icon" />
                      <span className="sr-only">Instagram link</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="member_infos">
              <BlockContent blocks={member._rawBiography} />
              <p>
                <span>Contact</span>: {member.contactMedium}
              </p>
            </div>
          </div>
        </MemberPageStyle>
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
      business
      contactMedium

      _rawBiography

      facebook
      instagram
      category {
        category
      }
      slug {
        current
      }
      image {
        asset {
          fixed(width: 300, height: 280) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`;
