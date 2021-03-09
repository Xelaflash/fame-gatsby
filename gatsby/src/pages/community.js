import React from 'react';
import { Container } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BrushStroke from '../components/BrushStroke';
import MemberIcon from '../components/community/memberIcon';

const MembersPageStyles = styled.div`
  .team-grid {
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    justify-items: center;
  }
  .team_member {
    box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
    border-radius: 5px;
    height: 280px;
    width: 300px;
  }
  .member-infos {
    height: 100%;
    width: 100%;
    background: #000;
    text-align: center;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
    border-radius: 5px;
  }
  .member-infos .member_img {
    width: 100%;
    height: auto;
    transition: all 0.55s ease 0s;
    border-radius: 5px;
  }
  .member-infos:hover .member_img {
    opacity: 0.3;
  }

  .member-infos .team-content {
    padding: 8px 12px 12px;
    min-width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: 0 0;
    transition: all 0.55s ease 0s;
  }
  .member-infos:hover .team-content {
    opacity: 1;
  }
  .member-infos .team-content:before,
  .member-infos .team-content:after {
    content: '';
    width: 400px;
    height: 2px;
    background: linear-gradient(to right, #f12711, #f5af19);
    position: absolute;
    top: 0;
    left: 10px;
    transform: translateX(100%);
    transition: all 0.55s ease 0s;
  }
  .member-infos .team-content:after {
    top: auto;
    left: auto;
    bottom: 0;
    right: 10px;
    transform: translateX(-100%);
  }
  .member-infos:hover .team-content:before,
  .member-infos:hover .team-content:after {
    transform: translate(0, 0);
    transition-delay: 0.15s;
  }
  .member-infos .member-name {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    margin: 10px 3px;
  }
  .member-infos .member-name:before,
  .member-infos .member-name:after {
    content: '';
    width: 2px;
    height: 300px;
    background: linear-gradient(to right, #f12711, #f5af19);
    position: absolute;
    top: 10px;
    right: 0;
    transform: translateY(100%);
    transition: all 0.55s ease 0s;
  }
  .member-infos .member-name:after {
    top: auto;
    right: auto;
    bottom: 10px;
    left: 0;
    transform: translateY(-100%);
  }
  .member-infos:hover .member-name:before,
  .member-infos:hover .member-name:after {
    transform: translate(0, 0);
  }
  .member-infos .member-business {
    display: block;
    padding: 10px 6px;
    background: linear-gradient(to right, #f12711, #f5af19);
    font-size: 13px;
    font-weight: 700;
    color: var(--white);
    text-transform: capitalize;
  }

  @media only screen and (max-width: 990px) {
    .member-infos {
      margin-bottom: 30px;
    }
  }
`;

export default function CommunityPage({ data }) {
  const members = data.communityMembers.nodes;
  return (
    <Layout>
      <MembersPageStyles>
        <SEO
          title="Community"
          keywords={['people', 'fame', 'Barbados', 'community']}
        />
        <Container>
          <h1 className="title">Meet our Community</h1>
          <BrushStroke />
          <p className="paragraphTexts">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam
            delectus error libero dolore sed! Accusamus corporis, tempora quos
            ipsa totam fugiat amet saepe impedit asperiores? Ad quod tempore
            tempora.
          </p>

          <div className="team-grid">
            {members.map((member, index) => (
              <Link to={`/community/${member.slug.current}`}>
                <div className="team_member" key={`${index}`}>
                  <div className="member-infos">
                    <Img
                      fixed={member.image.asset.fixed}
                      alt="{member.name} - F.A.M.E Community member"
                      className="member_img"
                      imgStyle={{ objectFit: 'contain' }}
                      style={{ height: '100%', width: '100%' }}
                    />
                    <div className="team-content">
                      <h3 className="member-name">{member.name}</h3>
                      <MemberIcon member={member} />
                      <span className="member-business">{member.business}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </MembersPageStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    communityMembers: allSanityCommunityMember {
      nodes {
        name
        biography
        business
        contactMedium
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
  }
`;
