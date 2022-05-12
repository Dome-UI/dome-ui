import React from 'react';
import './reset.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps }: any) {
  return (
      <Component {...pageProps} />
  );
}
