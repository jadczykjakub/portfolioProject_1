import React, { useState } from 'react';
import { addClothes } from '../features/Clothes';
import { useDispatch } from 'react-redux';

export default function AddClothes() {
  const dispatch = useDispatch();

  const [clothesName, setClothesName] = useState('');
  const [clothesSeason, setClothesSeason] = useState('');
  const handleClothesNameChange = (event) => {
    setClothesName(event.target.value);
  };

  const handleClothesSeasonChange = (event) => {
    setClothesSeason(event.target.value);
  };

  const handleAddClothes = () => {
    dispatch(addClothes({ name: clothesName, season: clothesSeason }));
    setClothesName('');
    setClothesSeason('');
  };
  return (
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
  );
}
