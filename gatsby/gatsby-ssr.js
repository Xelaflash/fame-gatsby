import React from 'react';
import GlobalStyles from './src/styles/GlobalStyles';
import Fonts from './src/styles/Fonts';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();

  headComponents.sort((a, b) => {
    if (a.props && a.props['data-react-helmet']) {
      return 0;
    }
    return 1;
  });
  replaceHeadComponents(headComponents);
};

export function wrapPageElement({ element }) {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      {element}
    </>
  );
}
