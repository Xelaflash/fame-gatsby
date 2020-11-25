import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  border: 1px solid red;
`;

export default function Card() {
  return (
    <CardStyles>
      <p>
        FAME is a movement of Food, Art and Music lovers that want to get people
        together to enjoy gatherings with respect for the Environment. Our team
        organises Festivals, Pop ups & Charity events. Our middle term focus is
        the Caribbean and South America where local artists get podiums next to
        international names. Our main priority is the creation of awareness for
        environmental local issues, for self-respect and healthy lifestyle
        through the promotion & discovery of a sustainable lifestyle : fresh &
        local food, healthy recipes, self-care & artistic practices…{' '}
      </p>
    </CardStyles>
  );
}
