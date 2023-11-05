import React from 'react';
import { useAppSelector } from '../app/hooks';

export default function ClothesResponse() {
  const { loading, error, response } = useAppSelector((state) => state.clothes);

  return (
    <div>
      <div>{loading && <div>loading...</div>}</div>
      <div>{!loading && error ? <div> {error} </div> : null}</div>
      <div>
        {response === 'add'
          ? 'Clothes added successfully'
          : response === 'delete'
          ? 'Clothes delete successfully'
          : response === 'update'
          ? 'Clothes update successfully'
          : null}
      </div>
    </div>
  );
}
