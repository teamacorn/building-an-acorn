import React, {useState} from 'react';
import reviews from './Reviews.jsx';
import { useSelector, useDispatch } from 'react-redux';
import NativeSelect from '@mui/material/NativeSelect';
import { fetchReviews } from '../../../redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SortSelect = ({sort}) => {
    const dispatch = useDispatch();
    const currentProduct = useSelector(state => state.currentProduct);
    const [label, setLabel] = useState('relevant');

    const handleLabel = (e) => setLabel(e.target.value);

    return (

        <Select name="sort-button" value={label} variant="standard" style={{height: "2em", borderTop: "0px" }} onChange={(e) => {
          sort(e.target.value);
          dispatch(fetchReviews(currentProduct.product.id, e.target.value)), handleLabel(e);

          }}>

          <MenuItem value="relevant">Relevant</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="helpful">Helpful</MenuItem>
        </Select>

    )
}

