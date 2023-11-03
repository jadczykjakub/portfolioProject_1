import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClothes, fetchClothes } from '../features/Clothes';


export default function Clothes() {
  const { loading, clothesList, error, updateState, response } = useSelector(
    (state) => state.clothes,
  );
  console.log(response, 'elo');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  const [clothesName, setClothesName] = useState('');
  const [clothesSeason, setClothesSeason] = useState('');

  const handleClothesNameChange = (event) => {
    setClothesName(event.target.value);
  };

  const handleClothesSeasonChange = (event) => {
    setClothesSeason(event.target.value);
  };

  const handleAddClothes = (e) => {
    dispatch(addClothes({ name: clothesName, season: clothesSeason }));
    setClothesName('');
    setClothesSeason('');
  };

  return (
    <div>
      Clothes{' '}
      <div>
        Add clothes
        <div>
          <input
            type="text"
            value={clothesName}
            onChange={handleClothesNameChange}
            placeholder="Enter your data"
          />
          <input
            type="text"
            value={clothesSeason}
            onChange={handleClothesSeasonChange}
            placeholder="Enter your data"
          />
          <button onClick={handleAddClothes}>Add clothes</button>
        </div>
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
