import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BrushStroke from '../components/BrushStroke';

const WeeklyStyles = styled.div`
  .subtitle {
    text-align: center;
    margin: 1px auto;
    font-size: 2.15rem;
    color: #dedede;
    letter-spacing: 1px;
  }
`;

export default function WeeklyTalkPage() {
  return (
    <Layout>
      <WeeklyStyles>
        <SEO
          title="Weekly Talk"
          keywords={['podcast', 'fame festival', 'Barbados', 'community']}
        />
        <Container>
          <h1 className="title">F.A.M.E. Weekly Talk</h1>
          <h3 className="subtitle">A POSITIVE CHANNEL TO PROMOTE & INFORM</h3>
          <BrushStroke />
          <div className="wrapper">
            <p className="paragraphTexts">
              Every Sunday evening we invite guests on our{' '}
              <a
                href="https://www.instagram.com/famefestival_barbados/channel/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline_svg link_white"
              >
                instagram live
              </a>{' '}
              to talk about topics that matter!
            </p>
            <p className="paragraphTexts">
              Mishka Mctair will be hosting the talk, in which different
              speakers with a background in Food, Art, Music and Environment
              will share their passion, career, music as well as their healthy &
              conscious way of living. <br />
              <br />
              We selected for you everyday life heros that have an important
              role to play in the success of uplifting others and therefore we
              invite them to be part of the we love F.A.M.E. community and share
              with us creative & positive contents ! <br />
              <br />
              We love <strong>F.A.M.E. Community</strong> creates this positive
              channel to bring people together and share knowledge on how to
              achieve a healthy and happy lifestyle. <br />
              <br />
              We see the <strong>F.A.M.E Weekly Talk</strong> as a way to
              collectively help many. <br />
              Our biggest wish is to awake people through knowledge to respect
              themselves and their environment. <br />
              Our channel facilitates the sharing of tips within the community
              on how to embrace new habits and act upon them.
              <br />
              We believe in everyone being able to create a butterfly effect in
              other words together we can make a huge difference to the world.{' '}
              <br />
              Let’s inspire each other by sharing healthy & simple ways to live
              better, share knowledge and respect all individuals. <br />
              We can all contribute to a better world! Why not pick up the
              pieces of trash we see on our path, in our streets, parks, beaches
              and make our environment cleaner. <br />
              Why not embrace self-love, self-care & self improvement in our
              everyday practices for a clearer inner environment (inner self)
              brings you further in life ?
            </p>
          </div>
        </Container>
      </WeeklyStyles>
    </Layout>
  );
}
