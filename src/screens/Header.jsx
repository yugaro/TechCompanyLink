import React from 'react';
import { string } from 'prop-types';

export default function Header(props) {
  const { text } = props;
  return (
    <header className="App-header">
      <h2>{text}</h2>
    </header>
  );
}

Header.propTypes = {
  text: string.isRequired,
};
