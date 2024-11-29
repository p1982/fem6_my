import React from 'react';
import { useFetchData } from '../../../../shared/hooks/use-fetch-data';
import { CharacterList } from '../../../../shared/components/CharacterList';
import { Spinner } from '../../../../shared/components/Spinner';

export const HomePage = () => {
  const { data, loading, error } = useFetchData(
    'https://www.potterapi.com/v1/characters',
  );

  const persons = data && <CharacterList data={data} />;
  const loader = loading && <Spinner />;

  return (
    <div className="container mt-5">
      {loader}
      {persons}
      {error && <p>errors...</p>}
    </div>
  );
};
