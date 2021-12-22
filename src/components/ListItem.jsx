import { string } from 'prop-types';
import React from 'react';

export default function ListItem(props) {
  const { text } = props;
  return (
    <div>
      {text}
    </div>
  );
}

ListItem.propTypes = {
  text: string.isRequired,
};
