import React from 'react';
import styled from 'styled-components';

const QuoteStyles = styled.div`
  .blockquote {
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: var(--white);
    padding: 30px 0;
    width: 100%;
    max-width: 700px;
    z-index: 1;
    margin: 80px auto;
    border-top: solid 1px;
    border-bottom: solid 1px;
  }

  /* Blockquote header */
  .blockquote h2 {
    color: var(--white);
    font-size: 3.5rem;
    font-weight: 800;
    letter-spacing: 3px;
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
  @media all and (min-width: 600px) {
    .blockquote h1 {
      font-size: 50px;
    }
  }
`;

export default function Quote({ quote }) {
  return (
    <QuoteStyles>
      <div className="blockquote">
        <h2>{quote.quoteText}</h2>
      </div>
    </QuoteStyles>
  );
}
