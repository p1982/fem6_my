import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../../../shared/hooks/use-fetch-data';
import { Spinner } from '../../../../shared/components/Spinner';

export const CharterPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(
    `https://www.potterapi.com/v1/characters/${id}`,
  );

  const { name, role, species } = data;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Errros</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 mt-5">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <strong>Role: </strong>
                {role}
              </p>
              <p className="card-text">
                <strong>Species: </strong>
                {species}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
