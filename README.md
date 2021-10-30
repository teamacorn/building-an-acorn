# building-an-acorn

## References
- Redux
  - gopinav's [react-redux-tutorial](https://github.com/gopinav/React-Redux-Tutorials)
  - [A dummy's guide to redux and thunk in react](https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react)

## Available Scripts
- To build and bundle files using webpack
```
npm run build-dev
```
- To start the server
```
npm run start
```

## Notes
``` javascript
{
  currentProduct: null,
  productList: [],
  
  overview: {
    styleList: [],
    currentStyle: styleId,

  },

  qa: {
    questionList: [],
    answerList: []
  },

  ratingAndREview: {
    ratingList: [],
    rating:
  },

  relatedItems: {
    itemList: [id1, id2, id3]
  }
}




export const fetchUsers = (id) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('/products/${id}')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
}


// under overview container
mapStateTOProps = (state) => ({
  rating: state.ratingAndREview.rating,
  currentStyle: state.overview.currentStyle
})
```
