import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClothes, removeClothes } from '../features/Clothes';
import AddClothes from './AddClothes';

export default function Clothes() {
  const { loading, clothesList, error, updateState, response } = useSelector(
    (state) => state.clothes,
  );
  console.log(response, 'elo');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  const [clothesToDelete, setClothesToDelete] = useState('');

  const handleClothesDeleteChange = (event) => {
    setClothesToDelete(event.target.value);
  };

  const handleClothesRemove = () => {
    dispatch(removeClothes);
  };

  return (
    <div>
      <div>
        Add Clothes <AddClothes />
      </div>
      <div>
        <input
          type="text"
          value={clothesToDelete}
          onChange={setClothesToDelete}
          placeholder="id of clothes"
        />
        <button onClick={handleClothesDeleteChange}>Remove clothe</button>
      </div>
      <div>{!loading && error ? <div> {error} </div> : null}</div>
      <div>
        {response === 'add'
          ? 'Clothes added successfully'
          : response === 'delete'
          ? 'CLothe delete successfully'
          : response === 'update'
          ? 'CLothe update successfully'
          : null}
      </div>
    </div>
  );
}
