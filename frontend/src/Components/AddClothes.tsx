import React, { ChangeEvent, useState } from 'react';
import { addClothes } from '../features/Clothes';
import { useAppDispatch } from '../app/hooks';
import { Season } from '../types/enums';

export default function AddClothes() {
  const dispatch = useAppDispatch();

  const [clothesName, setClothesName] = useState('');
  const [clothesSeason, setClothesSeason] = useState<Season>(Season.Winter);
  const handleClothesNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setClothesName(event.target.value);
  };

  const handleClothesSeasonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setClothesSeason(event.target.value as Season);
  };

  const handleAddClothes = () => {
    dispatch(addClothes({ name: clothesName, season: clothesSeason }));
    setClothesName('');
    setClothesSeason(Season.Winter);
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
