import React from 'react';
import styled from 'styled-components';
import brush from '../assets/images/brush.svg';

const BrushStrokeStyles = styled.div`
  margin: 0 auto 30px auto;
  text-align: center;
  img {
    height: 20px;
  }
`;

export default function BrushStroke() {
  return (
    <BrushStrokeStyles>
      <img src={brush} alt="" />
    </BrushStrokeStyles>
  );
}
