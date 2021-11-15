import React from 'react';
import { useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import Stack  from '@mui/material/Stack';

const CharBars = () => {

  const char = useSelector(state => state.ratings.metadata.characteristics);

  if (!char) {
    return null;
  } else {
    const charArr = [];
    for (var [key, innerObj] of Object.entries(char)) {
      let tempArr = [];
      tempArr.push(key, Number(parseFloat(innerObj.value).toFixed(2)));
      console.log(tempArr)
      if (tempArr[0] === 'Quality') { tempArr.push('Poor', 'Perfect', 'Great') } else { tempArr.push('Too small', 'Perfect')};
      charArr.push(tempArr);
    }
    console.log(charArr)

    return (
      <Stack spacing={2} alignItems={"center"}>
      {charArr.map((rating, index) => {
        return (
          <div key={index*2.32}>
          <p>{rating[0]}</p>
          <LinearProgress variant="determinate" key={index*146} value={rating[1] * 20} style={{ width: '100%' }}/>
          </div>
        )}
      )}
      </Stack>
    )
  }
}
export default CharBars;

//['Quality', 2.84]

// charArr[0] = characteristic type string
// charArr[1] = value (out of 5)