import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  border: 1px solid red;
`;

export default function Card() {
  return (
    <CardStyles>
      <p>i'm a card</p>
    </CardStyles>
  );
}
