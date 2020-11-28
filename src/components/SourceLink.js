import React from 'react';
import { Link } from 'react-router-dom';

const SourceLink = props => {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <Link
      to={process.env.REACT_APP_SOURCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
    // <a href={process.env.REACT_APP_SOURCE_URL} target="_blank" rel="noopener noreferrer" {...props} />
  );
};

export default SourceLink;
