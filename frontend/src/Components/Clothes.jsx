import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClothes } from '../features/Clothes';

export default function Clothes() {
  const { loading, clothesList, error, updateState, response } = useSelector(
    (state) => state.clothes,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  console.log(clothesList, 'duppa');

  return (
    <div>
      Clothes{' '}
      <div>
        {response === 'add'
          ? 'employee added successfully'
          : response === 'delete'
          ? 'employee delete successfully'
          : response === 'update'
          ? 'employee update successfully'
          : null}
      </div>
    </div>
  );
}
