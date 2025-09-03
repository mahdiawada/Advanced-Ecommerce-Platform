import "../css/ShopByCategory.css"
import EastIcon from '@mui/icons-material/East';
import {Link} from 'react-router-dom';

export default function ShopByCategory() {
    return (
        <div className="p-8 flex flex-col gap-8 sm:box-border sm:p-25">
            <div className="flex flex-col items-center gap-3.5">
                <h1 className="text-3xl font-bold">Shop by <span className="text-blue-600">Category</span></h1>
                <p className="text-gray-500 text-center text-xl">Find the perfect tech solution for your needs!</p>
            </div>

            <div className="grid grid-cols-1 justify-center gap-15 lg:grid-cols-3">
                    <Link to={'/category/laptops'} className="flex justify-center items-center">
                    <div className="w-full h-auto bg-gray-200 rounded-xl shadow-2xl lg:w-[350px]">
                        <img className="w-full h-70 rounded-t-xl" src="/photos/laptop.jpg"/>
                        <div className="box-border p-5 flex flex-col gap-3.5">
                            <h2 className="text-2xl font-bold">Laptops</h2>
                            <p>High-performance laptops for work and gaming!</p>
                            <button className="bg-blue-600 p-2.5 text-white w-37 rounded-xl cursor-pointer">Explore Now<EastIcon className="ml-1.5"/></button>
                        </div>
                    </div>
                    </Link>
                    <Link to={'/category/phones'} className="flex justify-center items-center">
                    <div className="w-full h-auto bg-gray-200 rounded-xl shadow-2xl lg:w-[350px]">
                        <img className="w-full h-70 rounded-t-xl" src="/photos/phone.jpg"/>
                        <div className="box-border p-5 flex flex-col gap-3.5">
                            <h2 className="text-2xl font-bold">Phones</h2>
                            <p>Latest smartphones with cutting-edge features!</p>
                            <button className="bg-blue-600 p-2.5 text-white w-37 rounded-xl cursor-pointer">Explore Now<EastIcon className="ml-1.5"/></button>
                        </div>
                    </div>
                    </Link>

                    <Link to={'/category/desktops'} className="flex justify-center items-center">
                    <div className="w-full h-auto bg-gray-200 rounded-xl shadow-2xl lg:w-[350px]">
                        <img className="w-full h-70 rounded-t-xl" src="/photos/desktop.jpg"/>
                        <div className="box-border p-5 flex flex-col gap-3.5">
                            <h2 className="text-2xl font-bold">Desktop</h2>
                            <p>Powerful desktop systems for all tech interested and professionals!</p>
                            <button className="bg-blue-600 p-2.5 text-white w-37 rounded-xl cursor-pointer">Explore Now<EastIcon className="ml-1.5"/></button>
                        </div>
                    </div>
                    </Link>
            </div>
        </div>
    )
}