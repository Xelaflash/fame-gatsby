import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const EnvironmentImgsStyle = styled.div`
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function EnvironmentImgs({ images }) {
  return (
    <EnvironmentImgsStyle>
      {images.map((img) => (
        <Img
          key={img.id}
          fixed={img.image.asset.fixed}
          alt={`${img.name} - F.A.M.E environment`}
          className="environment_img"
        />
      ))}
    </EnvironmentImgsStyle>
  );
}
