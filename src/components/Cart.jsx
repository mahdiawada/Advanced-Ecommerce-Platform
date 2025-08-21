import '../css/Cart.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { useContext,useState } from 'react';
import { CartContext } from '../context/CartContext';
import { IconButton } from '@mui/material';

export default function Cart() {
    const validPromoCodes = {
    'SAVE10': 0.10,
    'SUMMER20': 0.20,
    };

    const {cartItems, setCartItems} = useContext(CartContext);
    const [promoCodeInput, setPromoCodeInput] = useState('');
    const [discount, setDiscount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const applyPromoCode = () => {
    const code = promoCodeInput.trim().toUpperCase();
    if (validPromoCodes[code]) {
        const calculatedDiscount = subTotal() * validPromoCodes[code];
        setDiscount(calculatedDiscount);
        setErrorMessage(''); 
    } else {
        setDiscount(0); 
        setErrorMessage('Invalid promo code');
    }
};

    function subTotal() {
        let subTotal=0;
        cartItems.forEach( item => {
            subTotal += item.price * item.quantity;
        });
        return subTotal;
    }

    function calculateTotal() {
        let total = 0;
        if(shippingCost() > 0){
        total = subTotal() + shippingCost();
        } else {
            total = subTotal();
        }
        return total;
    }

    function shippingCost() {

        if(subTotal() > 0 && subTotal() < 50){
            return 5;
        } else if (subTotal() > 50) {
            return 0;
        }
        return 0;
    }

    function addQuantity(product) {
        const updatedCart = cartItems.map( item => {
            if(item.id == product.id) {
                return {...item , quantity: item.quantity + 1};
            } 
            return item;
        });
        setCartItems(updatedCart);
    }

    function subQuantity(product) {
        const existingItem = cartItems.find(item => item.id === product.id);
        let updatedCart;
        if (existingItem.quantity === 1) {
            updatedCart = cartItems.filter(item => item.id !== product.id);
        } else {
            updatedCart = cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        }
        setCartItems(updatedCart);
    }

    function deleteCartItem(product) {
        const newCartItems = cartItems.filter(item => {
            if(item.id == product.id) {
                return false;
            } else {
                return true;
            }
        });
        setCartItems(newCartItems);
    }

    const cartItemsList = cartItems.map((item) => {
        return (
            <div key={item.id} className='flex bg-white flex-col p-3 pb-7 rounded-2xl gap-3.5 shadow-2xl sm:flex-row md:w-full'>
                    
                    <img className='rounded-2xl h-52 md:h-40' src={item.image}/>

                    <div className='flex flex-col gap-3.5 sm:justify-around md:flex-row md:items-center md:justify-between md:w-2xl'>
                    <div className='flex flex-col gap-1.5'>
                        <h2 className='text-2xl font-bold'>{item.brand}</h2>
                        <p>{item.details}</p>
                        <h1 className='font-bold text-2xl'>{item.price}$</h1>
                    </div>
                    <div className='flex justify-between items-center md:gap-4'>
                        <div className='flex gap-2 border-gray-300  border rounded-xl cursor-pointer items-center'><IconButton className='m-0' onClick={() => addQuantity(item)}><AddOutlinedIcon/></IconButton>{item.quantity}<IconButton className='m-0' onClick={() => {subQuantity(item)}}><RemoveIcon/></IconButton></div>
                        <IconButton onClick={() => {deleteCartItem(item)}}><DeleteOutlineOutlinedIcon className='text-red-600 cursor-pointer'/></IconButton>
                    </div>
                    </div>
                </div>
        )
    });

    return (
            <div className="w-full h-[100vh] p-7 md:p-15 overflow-y-auto bg-gray-100 transition-all duration-500">
            <h1 className="text-2xl font-extrabold">
                Shopping <span className="text-blue-500">Cart</span>
            </h1>
            <p className="text-lg text-gray-600 mb-5">{cartItems.length} Items in your Cart</p>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                <div className="flex flex-col gap-7 w-full box-border lg:w-2/3">
                {cartItemsList}
                </div>

                <div className="box-border bg-white p-7 rounded-2xl flex flex-col gap-4 shadow-2xl lg:w-1/3">
                <h2 className="font-bold text-2xl">Order Summary</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between"><p>Subtotal</p><p>${subTotal()}</p></div>
                    <div className="flex justify-between"><p>Shipping</p><p>${shippingCost() === 0 && subTotal() > 0 ? 'Free' : `${shippingCost()}` }</p></div>
                    <hr />
                    <div className="flex text-xl justify-between"><p>Total</p><p>${calculateTotal()}</p></div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between w-full'>
                        <input value={promoCodeInput} onChange={(event) => {setPromoCodeInput(event.target.value)}} className='border-gray-300 text-black w-3/4 rounded-[5px] border outline-0 box-border p-1.5' placeholder='Promo code'/>
                        <button className='border-gray-300 border box-border p-1.5 rounded pl-3 pr-3'>Apply</button>
                    </div>
                    
                    <Button variant="contained">Proceed to Checkout</Button>
                </div>
                
                </div>
            </div>
            </div> 
    )
}
