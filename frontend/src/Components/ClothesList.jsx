import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClothes, removeClothes } from '../features/Clothes';

export default function ClothesList() {
  const { clothesList } = useSelector((state) => state.clothes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeClothes(id));
    console.log(id);
  };
  return (
    <div>
      ClothesList{' '}
      <div>
        {clothesList?.map((item) => (
          <div>
            <h2>
              {item.name}/{item.season}
            </h2>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
