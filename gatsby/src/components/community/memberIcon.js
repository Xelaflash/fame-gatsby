import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const MemberIcon = (member) => {
  const icons = useStaticQuery(graphql`
    query {
      iconFood: file(name: { eq: "icon-food" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      iconArt: file(name: { eq: "icon-art" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      iconMusic: file(name: { eq: "icon-music" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      iconEnvironment: file(
        name: { eq: "icon-env" }
        extension: { eq: "png" }
      ) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  const memberCat = member.member.category.category;
  console.log();
  switch (memberCat) {
    case 'Art':
      return (
        <>
          <Img
            fixed={icons.iconArt.childImageSharp.fixed}
            alt={`${member} - FAME member category icon`}
          />
        </>
      );
    case 'Food':
      return (
        <>
          <Img
            fixed={icons.iconFood.childImageSharp.fixed}
            alt={`${member} - FAME member category icon`}
          />
        </>
      );
    case 'Music':
      return (
        <>
          <Img
            fixed={icons.iconMusic.childImageSharp.fixed}
            alt={`${member} - FAME member category icon`}
          />
        </>
      );
    case 'Environment':
      return (
        <>
          <Img
            fixed={icons.iconEnvironment.childImageSharp.fixed}
            alt={`${member} - FAME member category icon`}
          />
        </>
      );
    default:
      return <></>;
  }
};

export default MemberIcon;
