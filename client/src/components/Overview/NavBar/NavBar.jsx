import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector, useDispatch} from 'react-redux';
import { fetchCurrentProduct } from '../../../redux'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const allProducts = useSelector(state => state.productList)
  const dispatch = useDispatch();
  const [queryString, setQueryString] = useState('')

  console.log(allProducts.listOfProducts)
  const handleChange = (e) => {
    setQueryString(e.target.value);
    let product = allProducts.listOfProducts.filter(item => item.name.toLowerCase() === e.target.value.toLowerCase())
    if (product.length === 1) {
      // console.log(product[0])
      dispatch(fetchCurrentProduct(product[0].id))
    }
  }
  return (

      <AppBar position="sticky" style={{backgroundColor: '#212121', marginBottom: '3%', }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Acorn
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={handleChange}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}

              //form
              // search
              // every keystroke set to keystroke
              // filter current products
              //if state === product name
              // set curent product to product

            />
          </Search>
        </Toolbar>
      </AppBar>

  );
}