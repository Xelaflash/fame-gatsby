import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
  .blockquote h1 {
    color: var(--white);
    font-size: 40px;
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
    bottom: -43px;
    right: 30px;
  }
  @media all and (min-width: 600px) {
    .blockquote h1 {
      font-size: 50px;
    }
  }
`;

function SingleQuote({ quote }) {
  return (
    <QuoteStyles>
      <div className="blockquote">
        <h1>{quote.quoteText}</h1>
      </div>
    </QuoteStyles>
  );
}

export default function Quote() {
  const data = useStaticQuery(graphql`
    query {
      quotes: allSanityQuotes {
        nodes {
          id
          quoteText
        }
      }
    }
  `);
  const quotes = data.quotes.nodes;
  return (
    <>
      {quotes.map((quote) => (
        <SingleQuote key={quote.id} quote={quote} />
      ))}
    </>
  );
}

/* <QuoteStyles>
<div className="blockquote">
  <h1>Have you ever explored all your sens at once ?</h1>
</div>
</QuoteStyles> */
