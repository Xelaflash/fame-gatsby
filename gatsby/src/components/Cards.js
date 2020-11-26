import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import fameLogoText from '../assets/images/logo-text.png';
import weeklyLogo from '../assets/images/weekly-talk-white.png';

const CardStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
  padding: 2rem;
  /* grid-auto-rows: auto 280px; */
  .card-home {
    display: grid;
    @supports not (grid-template-rows: subgrid) {
      grid-template-rows: 1fr minmax(280px, 350px);
    }
    /*  ⚠️ Chrome does not support subgrid */
    grid-template-rows: subgrid;
    grid-row: span 2;
    grid-gap: 1rem;
    align-items: center;
    font-size: 16px;
    max-width: 500px;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1);
    border: 1px solid rgba(255, 255, 255, 0.6);
    transition: transform 0.15s linear;
    margin: 20px;
    img {
      margin: 10px auto;
    }
    .card-link {
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export default function Cards() {
  return (
    <CardStyles>
      <div className="card-home">
        <img src={fameLogoText} alt="" height="150" />
        <p>
          F.A.M.E is a movement of <strong>Food</strong>, <strong>Art </strong>
          and <strong>Music</strong> lovers that want to get people together to
          enjoy gatherings with respect for the Environment. <br />
          Our team organises Festivals, Pop ups & Charity events. Our middle
          term focus is the Caribbean and South America where local artists get
          podiums next to international names. <br />
          Our main priority is the creation of awareness for environmental local
          issues, for self-respect and healthy lifestyle through the promotion &
          discovery of a sustainable lifestyle : fresh & local food, healthy
          recipes, self-care & artistic practices…
        </p>
        <Link to="/community" className="card-link">
          See more &#8594;
        </Link>
      </div>
      <div className="card-home">
        <img src={weeklyLogo} alt="" height="150" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          ut aperiam placeat praesentium. Atque, voluptas vitae aliquam porro
          adipisci laudantium odio error dolorum id deleniti, accusantium dicta
          nostrum illo. Similique.
        </p>
        <Link to="/weeklyTalk" className="card-link">
          See more &#8594;
        </Link>
      </div>
    </CardStyles>
  );
}
