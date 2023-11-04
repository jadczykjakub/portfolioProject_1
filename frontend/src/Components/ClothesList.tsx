import React, { useEffect, useState, ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  fetchClothes,
  removeClothes,
  changeStateTrue,
  changeStateFalse,
  modifiedClothes,
} from '../features/Clothes';
import { IClothes } from '../types/clothes';
import { Season } from '../types/enums';

export default function ClothesList() {
  const [id, setId] = useState<number>();

  const { clothesList, updateState } = useAppSelector((state) => state.clothes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch, updateState]);

  const [clothesName, setClothesName] = useState('');
  const [clothesSeason, setClothesSeason] = useState<Season>(Season.Winter);
  const handleClothesNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setClothesName(event.target.value);
  };

  const handleClothesSeasonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setClothesSeason(event.target.value as Season);
  };

  const handleDelete = (id: number) => {
    dispatch(removeClothes(id));
  };

  const handleUpdate = (item: IClothes) => {
    setId(Number(item._id));
    setClothesName(item.name);
    setClothesSeason(item.season);
    dispatch(changeStateTrue());
  };

  const updateClothes = () => {
    dispatch(
      modifiedClothes({
        _id: Number(id),
        name: clothesName,
        season: clothesSeason,
      }),
    );
    dispatch(changeStateFalse());
    setId(undefined);
    setClothesName('');
    setClothesSeason(Season.Winter);
  };

  return (
    <div>
      {updateState ? (
        <div>
          <p>Update</p>
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
          </div>
          <button onClick={() => updateClothes()}>update</button>
        </div>
      ) : null}

      <div>
        {clothesList?.map((item) => (
          <div>
            <h2>
              {item.name}/{item.season}
            </h2>
            <button onClick={() => handleUpdate(item)}>update</button>
            <button onClick={() => handleDelete(item._id as number)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
