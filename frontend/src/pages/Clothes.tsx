import React from 'react';
import AddClothes from '../Components/AddClothes';
import ClothesResponse from '../Components/ClothesResponse';
import ClothesList from '../Components/ClothesList';

export default function Clothes() {
  // const click = () => {

  // }

  return (
    <div>
      {/* <button onClick={clik}>coookies</button> */}
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
