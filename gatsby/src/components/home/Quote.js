import React from 'react';
import styled from 'styled-components';

const QuoteStyles = styled.div`
  .blockquote {
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: var(--white);
    padding: 30px 0;
    max-width: 600px;
    margin: 60px auto;
    border-top: solid 1px;
    border-bottom: solid 1px;
  }

  /* Blockquote header */
  .blockquote h2 {
    color: var(--white);
    font-size: 3.5rem;
    font-weight: 800;
    letter-spacing: 3px;
    max-width: 80%;
    margin: auto;
  }

  /* Blockquote right double quotes */
  .blockquote:after {
    position: absolute;
    content: '”';
    color: var(--white);
    font-size: 10rem;
    line-height: 0;
    bottom: -26px;
    right: 30px;
  }
  @media (max-width: 768px) {
    .blockquote {
      max-width: 80%;
    }
    .blockquote h2 {
      font-size: 2.5rem;
      max-width: 100%;
    }
  }
`;

export default function Quote({ quote }) {
  return (
    <QuoteStyles>
      <div
        className="blockquote"
        data-aos="zoom-in-right"
        data-aos-delay="100"
        data-aos-offset="200"
        data-aos-duration="1000"
      >
        <h2>{quote.quoteText}</h2>
      </div>
    </QuoteStyles>
  );
}
