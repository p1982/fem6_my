import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterCard = ({ name, _id, bloodStatus }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`Name: ${name}`}</h5>
          <p>{`Blood Status: ${bloodStatus}`}</p>
          <Link className="btn btn-primary" to={`/characters/${_id}`}>
            More...
          </Link>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  bloodStatus: PropTypes.string.isRequired,
};

export { CharacterCard };
