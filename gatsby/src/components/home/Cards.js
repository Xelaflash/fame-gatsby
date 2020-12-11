import { Link } from 'gatsby';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';
import weeklyLogo from '../../assets/images/weekly-talk-white.png';

const CardStyles = styled.div`
  padding: 2rem;
  .card-home {
    display: grid;
    @supports not (grid-template-rows: subgrid) {
      grid-template-rows: 1fr minmax(200px, 225px);
    }
    /*  ⚠️ Chrome does not support subgrid */
    grid-template-rows: subgrid;
    grid-row: span 2;
    grid-gap: 1rem;
    align-items: center;
    font-size: 16px;
    max-width: 450px;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1);
    border: 1px solid rgba(255, 255, 255, 0.6);
    transition: transform 0.15s linear;
    margin: 20px auto;
    img {
      margin: auto;
    }
    p {
      font-size: 1.8rem;
    }
    #fwt {
      font-family: var(--headings-font);
      font-size: 3rem;
    }
    #fwt_tags {
      font-size: 1.6rem;
      margin: 20px auto;
    }
    .card-link {
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
    .socialIcon {
      transition: all 0.3s;
      &:hover {
        transform: scale(1.5);
        color: var(--white);
      }
    }
  }
`;

export default function Cards() {
  return (
    <CardStyles>
      <div className="card-home">
        <p>WE LOVE F.A.M.E. COMMUNITY PRESENTS : </p>
        <img src={weeklyLogo} alt="" height="150" />
        <p>
          A positive channel to promote and inform.
          <br /> <br />
          <strong>Mishka Mctair</strong> hosting
          <a
            href="https://www.instagram.com/famefestival_barbados/channel/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaInstagram
              size="2.5em"
              style={{ padding: '0 10px' }}
              className="socialIcon"
            />
            <span className="sr-only">Instagram link</span>
          </a>
          LIVE sessions with guests to talk about topics that matter!
        </p>
        <p id="fwt_tags">#fameweeklytalk #fwtbarbados #famecommunitybarbados</p>
        <Link to="/weeklyTalk" className="card-link">
          See more &#8594;
        </Link>
      </div>
    </CardStyles>
  );
}
