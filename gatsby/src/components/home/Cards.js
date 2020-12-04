import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import fameLogoText from '../../assets/images/logo-text.png';
import weeklyLogo from '../../assets/images/weekly-talk-white.png';

const CardStyles = styled.div`
  padding: 2rem;
  .card-home {
    display: grid;
    @supports not (grid-template-rows: subgrid) {
      grid-template-rows: 1fr minmax(200px, 250px);
    }
    /*  ⚠️ Chrome does not support subgrid */
    grid-template-rows: subgrid;
    grid-row: span 2;
    grid-gap: 1rem;
    align-items: center;
    font-size: 16px;
    max-width: 450px;
    min-height: 300px;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1);
    border: 1px solid rgba(255, 255, 255, 0.6);
    transition: transform 0.15s linear;
    margin: 20px auto;
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
