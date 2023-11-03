import React from 'react';
import { useSelector } from 'react-redux';

export default function ClothesResponse() {
  const { loading, error, response } = useSelector((state) => state.clothes);

  return (
    <div>
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
