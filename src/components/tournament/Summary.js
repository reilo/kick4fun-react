import React, { PropTypes } from 'react';

const Summary = ({ tournament }) => {
  return (
    <div>
      <h5>{tournament.name}</h5>
    </div>
  );
};

Summary.propTypes = {
  tournament: PropTypes.object // isRequired: warning due to asynchronous loading?
};

export default Summary;