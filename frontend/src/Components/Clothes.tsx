import React from 'react';
import AddClothes from './AddClothes';
import ClothesResponse from './ClothesResponse';
import ClothesList from './ClothesList';

export default function Clothes() {
  return (
    <div>
      <div>
        Add Clothes <AddClothes />
      </div>
      <div>
        <ClothesList />
      </div>
      <div>
        <ClothesResponse />
      </div>
    </div>
  );
}
