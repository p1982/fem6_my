import React from 'react';
import PropTypes from 'prop-types';
import { CharacterCard } from '../CharacterCard';

const CharacterList = ({ data }) => {
  const chartersLists =
    data && data.map(props => <CharacterCard key={props._id} {...props} />);

  return (
    <div className="container">
      <div className="row">{chartersLists}</div>
    </div>
  );
};

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
};

export { CharacterList };
