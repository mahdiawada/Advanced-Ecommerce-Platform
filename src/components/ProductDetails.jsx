import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function ProductDetails() {
  const products = useContext(ProductsContext);
  const { productId } = useParams();   
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <h1 className="text-red-500 text-3xl">Product not found</h1>;
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" onClick={handleClick}>
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" onClick={handleClick}>
      {product.category}
    </Link>,
    <p key="3" className="text-black">
      {product.name}
    </p>,
  ];

  return (
    <div className="flex flex-col gap-4 px-4 py-7 lg:p-10">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <div className="flex items-center justify-center">
            <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-lg md:w-[472px] md:h-[472px]" />
          </div>
          <div className="box-border py-4 flex flex-col gap-3 md:p-4">
            <div className="w-20 py-1 text-white bg-black flex items-center justify-center rounded-xl">{product.brand}</div>
            <h1 className="text-black text-3xl font-semibold">{product.name}</h1>
            <span className="text-3xl font-bold text-black">{product.price}$</span>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-lg text-black">{product.details}</p>
            <button className="w-30 bg-blue-600 text-white px-3 py-2 rounded inline-flex items-center">Add to Cart</button>
          </div>

        </div>
    </div>
  );
}

{/* <img src={product.image} alt={product.name} className="w-1/2 rounded-2xl shadow-lg" />
      <h1 className="text-black text-4xl font-bold">{product.name}</h1>
      <p className="text-lg text-gray-600">{product.details}</p>
      <span className="text-2xl font-bold text-blue-600">{product.price}$</span> */}