import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export default function Dashboard() {
    return (
        <>
        <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
            </div>
            {/* <button className="bg-blue-500 w-40 text-white box-border p-3 rounded-[10px]"><AddIcon/>Add Product</button> */}
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col justify-around w-full h-40 bg-white border border-gray-300 shadow rounded-2xl box-border p-5'>
                <div className='flex justify-between'><h1 className=''>Total Revenue</h1><AttachMoneyIcon/></div>
                <div>
                    <h1 className='text-3xl font-bold'>$45,231,89</h1>
                </div>
            </div>
            <div className='flex flex-col justify-around w-full h-40 bg-white border border-gray-300 shadow rounded-2xl box-border p-5'>
                <div className='flex justify-between'><h1 className=''>Total Products</h1><Inventory2OutlinedIcon/></div>
                <div>
                    <h1 className='text-3xl font-bold'>2,350</h1>
                </div>
            </div>
            <div className='flex flex-col justify-around w-full h-40 bg-white border border-gray-300 shadow rounded-2xl box-border p-5'>
                <div className='flex justify-between'><h1 className=''>Total Orders</h1><ShoppingCartOutlinedIcon/></div>
                <div>
                    <h1 className='text-3xl font-bold'>12,234</h1>
                </div>
            </div>
            <div className='flex flex-col justify-around w-full h-40 bg-white border border-gray-300 shadow rounded-2xl box-border p-5'>
                <div className='flex justify-between'><h1 className=''>Active Customers</h1><PeopleAltOutlinedIcon/></div>
                <div>
                    <h1 className='text-3xl font-bold'>543</h1>
                </div>
            </div>
        </div>
        <h1 className='text-xl font-bold'>Quick Actions</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='w-full h-35 bg-white rounded-2xl border border-gray-300 shadow box-border p-7 flex items-center gap-4'>
                <div className='w-[50px] h-[50px] bg-blue-600 rounded-xl flex justify-center items-center text-white'><Inventory2OutlinedIcon/></div>
                <div>
                    <h1>Add new Product</h1>
                    <p className='text-gray-500 text-[14px]'>Create a new product listing</p>
                </div>
            </div>
            <div className='w-full h-35 bg-white rounded-2xl border border-gray-300 shadow box-border p-7 flex items-center gap-4'>
                <div className='w-[50px] h-[50px] bg-yellow-400 rounded-xl flex justify-center items-center text-white'><StarBorderIcon/></div>
                <div>
                    <h1>Manage Featured</h1>
                    <p className='text-gray-500 text-[14px]'>Update featured products</p>
                </div>
            </div>
            <div className='w-full h-35 bg-white rounded-2xl border border-gray-300 shadow box-border p-7 flex items-center gap-4'>
                <div className='w-[50px] h-[50px] bg-green-400 rounded-xl flex justify-center items-center text-white'><LocalOfferOutlinedIcon/></div>
                <div>
                    <h1>Create Discount</h1>
                    <p className='text-gray-500 text-[14px]'>Add new discount codes</p>
                </div>
            </div>
            <div className='w-full h-35 bg-white rounded-2xl border border-gray-300 shadow box-border p-7 flex items-center gap-4'>
                <div className='w-[50px] h-[50px] bg-purple-500 rounded-xl flex justify-center items-center text-white'><RemoveRedEyeOutlinedIcon/></div>
                <div>
                    <h1>View Analytics</h1>
                    <p className='text-gray-500 text-[14px]'>Check detailed reports</p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div className='w-full h-auto p-5 box-border bg-white rounded-2xl shadow border border-gray-300 flex flex-col gap-4'>
                <h1 className='font-bold text-md'>Recent Orders</h1>
                <div>
                    <div className='w-full h-25 border border-gray-300 shadow rounded-2xl box-border p-4 flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>ORD-001</h1>
                            <p className='text-gray-500 text-sm'>John Doe</p>
                            <p className='text-gray-500 text-sm'>iPhone 15 Pro</p>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <h1>$999.00</h1>
                            <div className='bg-black text-white flex justify-center items-center rounded-2xl text-sm'><h1>status</h1></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-full h-25 border border-gray-300 shadow rounded-2xl box-border p-4 flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>ORD-001</h1>
                            <p className='text-gray-500 text-sm'>John Doe</p>
                            <p className='text-gray-500 text-sm'>iPhone 15 Pro</p>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <h1>$999.00</h1>
                            <div className='bg-black text-white flex justify-center items-center rounded-2xl text-sm'><h1>status</h1></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-full h-25 border border-gray-300 shadow rounded-2xl box-border p-4 flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>ORD-001</h1>
                            <p className='text-gray-500 text-sm'>John Doe</p>
                            <p className='text-gray-500 text-sm'>iPhone 15 Pro</p>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <h1>$999.00</h1>
                            <div className='bg-black text-white flex justify-center items-center rounded-2xl text-sm'><h1>status</h1></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-full h-25 border border-gray-300 shadow rounded-2xl box-border p-4 flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>ORD-001</h1>
                            <p className='text-gray-500 text-sm'>John Doe</p>
                            <p className='text-gray-500 text-sm'>iPhone 15 Pro</p>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <h1>$999.00</h1>
                            <div className='bg-black text-white flex justify-center items-center rounded-2xl text-sm'><h1>status</h1></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto p-5 box-border bg-white rounded-2xl shadow border border-gray-300 flex flex-col gap-4'>
                <h1 className='font-bold text-md'>Top Products</h1>
                <div>
                    <div className='w-full h-25 border border-gray-300 shadow rounded-2xl box-border p-4 flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold'><h1>1</h1></div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='font-light text-l'>IPhone 15 Pro</h1>
                                <p className='text-gray-500 text-sm'>Phones</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <h1>$233,766</h1>
                            <p className='text-gray-500'>234 sales</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-full h-25 border border-gray-300 shadow rounded-2xl box-border p-4 flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold'><h1>2</h1></div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='font-light text-l'>IPhone 15 Pro</h1>
                                <p className='text-gray-500 text-sm'>Phones</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <h1>$233,766</h1>
                            <p className='text-gray-500'>234 sales</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-full h-25 border border-gray-300 shadow rounded-2xl box-border p-4 flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold'><h1>3</h1></div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='font-light text-l'>IPhone 15 Pro</h1>
                                <p className='text-gray-500 text-sm'>Phones</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <h1>$233,766</h1>
                            <p className='text-gray-500'>234 sales</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-full h-25 border border-gray-300 shadow rounded-2xl box-border p-4 flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-blue-200 rounded-full flex items-center justify-center text-blue-900 font-bold'><h1>4</h1></div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='font-light text-l'>IPhone 15 Pro</h1>
                                <p className='text-gray-500 text-sm'>Phones</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <h1>$233,766</h1>
                            <p className='text-gray-500'>234 sales</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
        </>
    )
}