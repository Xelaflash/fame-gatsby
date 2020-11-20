import React from 'react';
import styled from 'styled-components';
import CarouselWrapper from '../components/Carousel';

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
    /* position: relative; */
    color: var(--white);
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 3px;
  }

  /* Blockquote right double quotes */
  .blockquote:after {
    position: absolute;
    content: '”';
    color: rgba(255, 255, 255, 1);
    font-size: 10rem;
    line-height: 0;
    bottom: -43px;
    right: 30px;
  }
  /* increase header size after 600px */
  @media all and (min-width: 600px) {
    .blockquote h1 {
      font-size: 50px;
    }
  }
`;

export default function HomePage() {
  return (
    <>
      <CarouselWrapper />
      <QuoteStyles>
        <div className="blockquote">
          <h1>Feel like sharing simple pleasures of life ?</h1>
        </div>
      </QuoteStyles>
      <QuoteStyles>
        <div className="blockquote">
          <h1>Have you ever explored all your sens at once ?</h1>
        </div>
      </QuoteStyles>
    </>
  );
}
