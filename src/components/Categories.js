import React from 'react';
import './Categories.css';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector(
    (state) => (state.categoriesReducer.status ? state.categoriesReducer.status : ''),
    shallowEqual,
  );
  return (
    <>
      <button
        onClick={() => dispatch(checkStatus('Under construction'))}
        type="button"
      >
        Check status
      </button>
      <p id="categories-msg">{status}</p>
    </>
  );
};
export default Categories;
