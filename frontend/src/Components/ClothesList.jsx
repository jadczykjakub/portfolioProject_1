import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchClothes,
  removeClothes,
  changeStateTrue,
  changeStateFalse,
  modifiedClothes,
} from '../features/Clothes';

export default function ClothesList() {
  const [id, setId] = useState('');

  const { clothesList, updateState } = useSelector((state) => state.clothes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch, updateState]);

  const [clothesName, setClothesName] = useState('');
  const [clothesSeason, setClothesSeason] = useState('');
  const handleClothesNameChange = (event) => {
    setClothesName(event.target.value);
  };

  const handleClothesSeasonChange = (event) => {
    setClothesSeason(event.target.value);
  };

  const handleDelete = (id) => {
    dispatch(removeClothes(id));
  };

  const handleUpdate = (item) => {
    setId(item._id);
    setClothesName(item.name);
    setClothesSeason(item.season);
    dispatch(changeStateTrue());
  };

  const updateClothes = () => {
    dispatch(
      modifiedClothes({ id: id, name: clothesName, season: clothesSeason }),
    );
    dispatch(changeStateFalse());
    setId('');
    setClothesName('');
    setClothesSeason('');
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
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
