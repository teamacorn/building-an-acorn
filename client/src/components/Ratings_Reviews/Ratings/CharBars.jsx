import React from 'react';
import { useSelector } from 'react-redux';


const CharBars = () => {

  const char = useSelector(state => state.ratings.metadata.characteristics);


  if (!char) {
    return null;
  } else {

    const charArr = [];
    // ^ nested Arrays | charArr[0] = characteristic charArr[1] = num value
    for (var [key, innerObj] of Object.entries(char)) {
      let tempArr = [];
      tempArr.push(key, Number(parseFloat(innerObj.value).toFixed(2)));
      charArr.push(tempArr);
    }
    return (
      <div className="characteristics">
        {

        }

      </div>
    )
  }
}

export default CharBars;