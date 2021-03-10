import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import BrushStroke from './BrushStroke';

const FamePeopleStyles = styled.div`
  margin-bottom: 40px;
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

export default function FamePeople({ communityMembers, jobTitle }) {
  return (
    <FamePeopleStyles>
      <section className="artists">
        <h2 className="title">Fame community {jobTitle}</h2>
        <BrushStroke />
        <div className="artist_list">
          {communityMembers.map((people, index) => (
            <Link to={`/community/${people.slug.current}`}>
              <div className="single_artist" key={`${index}-fame`}>
                <Img
                  fluid={people.image.asset.fluid}
                  alt={`${people.name} - F.A.M.E Community`}
                  className="avatar"
                />
                <p className="artist_name">{people.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </FamePeopleStyles>
  );
}
