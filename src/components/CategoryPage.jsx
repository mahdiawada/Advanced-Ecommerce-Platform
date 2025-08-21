import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useParams } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const subcategories = {
  laptops: ['Lenovo', 'Dell', 'MacBook', 'Huawei'],
  phones: ['Samsung', 'iPhone', 'Techno'],
  tablets: ['iPad', 'Galaxy Tab', 'Surface'],
};

function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export default function CategoryPage() {
  
  const {cartItems, setCartItems} = useContext(CartContext);
  const { name } = useParams();
  const [categoryName, setCategoryName] = useState('All');
  const products = useContext(ProductsContext);

  const filteredProducts = products.filter(p => {
    if (p.category !== name) return false;
    if (categoryName === 'All') return true;
    return p.brand === categoryName;
  });

  function addToCart(product) {
    const existingItem = cartItems.find(item => item.id == product.id);
    if(existingItem) {
      setCartItems(cartItems.map(item => {
        if(item.id === product.id) {
          return {...item, quantity: item.quantity + 1}
        } else { return item }
      }));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  const productsList = filteredProducts.map((product) => {
    return (
                    <div key={product.id} className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <img src={product.image} alt={product.name} loading="lazy" className="block w-full aspect-[4/3] object-cover"  />
                        <div className="p-5 flex flex-col gap-4">
                          <div className="space-y-1">
                            <h2 className="text-xl font-bold m-0">{product.brand}</h2>
                            <p className="text-base m-0">{product.name}</p>
                            <p className="text-gray-500 m-0">{product.details}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold m-0">{product.price}$</span>
                            <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-3 py-2 rounded inline-flex items-center">
                              <ShoppingCartOutlinedIcon className="mr-1" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div> 
                      )
                    })

  const capitalName = capitalizeWords(name);
    const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Home
    </Link>,
    <p className='text-black'>
      {capitalName}
    </p>,
  ];

  
  
  const handleChange = (event) => {
    setCategoryName(event.target.value);
    console.log("Selected category:", event.target.value);
  };
    return (
        <>
        
        <div className='flex flex-col p-7 gap-2.5'>
            <Stack spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <h1 className='text-3xl font-bold'>{capitalName}</h1>
            <p className='text-gray-500 text-2xl font-light'>Discover our premium collection of Laptops!</p>
        </div>
        <div className='w-full h-auto bg-gray-100 p-3 pt-15 border-t-2 border-gray-200 flex flex-col gap-2.5 sm:p-10 sm:pt-15'>
            <div>
              <h1 className='text-2xl font-bold'>Products:</h1>
              <p className='text-gray-500 text-l'>{productsList.length} Products Found</p>
            </div>
            <div className='flex flex-col gap-5 md:flex-row'>
            <div className='flex items-center gap-3 box-border lg:justify-start lg:gap-2.5'>
              <h1>Choose Category:</h1>
              <FormControl className='w-30 m-1' size="small">
                <InputLabel id="demo-select-small-label">Category</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={categoryName}
                  label="Category"
                  onChange={handleChange}
                  sx={{
                      borderRadius: 3,
                      borderColor: 'black',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: 3,
                        borderColor: 'black'
                      },
                    }}
                >
                  <MenuItem value="All">All</MenuItem>
                  {subcategories[name]?.map((sub) => (
                    <MenuItem key={sub} value={sub}>{sub}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <input className='text-black bg-white border-black border box-border p-2 rounded-2xl outline-0 md:w-fit' placeholder='Search Products'/>
            </div>
            <div className='grid grid-cols-1 box-border p-6 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {productsList}
            </div>
        </div>
        </>
    )
}