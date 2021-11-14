import React, {useState} from 'react';
import reviews from './reviews.jsx';
import { useSelector, useDispatch } from 'react-redux';
import NativeSelect from '@mui/material/NativeSelect';

export const SortSelect = ({sort}) => {

    return (
        <NativeSelect name="sort-button" onChange={(e) => {
          sort(e.target.value);
          }}>

          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </NativeSelect>
    )
}

export default SortSelect;

// const SortSelect = () => {

//   const [age, setAge] = useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//         <Select
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value="relevant">Relevant</MenuItem>
//           <MenuItem value="newest">Newest</MenuItem>
//           <MenuItem value="helpful">Helpful</MenuItem>
//         </Select>
//       </FormControl>
//       </div>
//   )
// }