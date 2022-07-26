import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../public/font.css';

import wrapper from '../store/configureStore';

const Damso = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Damso</title>
      </Head>
      <Component />
    </>
  );
};

Damso.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Damso);
