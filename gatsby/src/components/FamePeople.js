import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
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
          {/* TODO: put link to creator card in community page */}
          {communityMembers.map((people, index) => (
            <div className="single_artist" key={`${index}-fame`}>
              <Img
                fluid={people.image.asset.fluid}
                alt={`${people.name} - F.A.M.E Community`}
                className="avatar"
              />
              <p className="artist_name">{people.name}</p>
            </div>
          ))}
        </div>
      </section>
    </FamePeopleStyles>
  );
}
