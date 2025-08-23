import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';

export default function AdminOrders(){
    return (
        <>
        <div className='flex flex-col gap-2 md:flex-row md:justify-between'>
            <div>
            <h1 className="text-3xl font-bold">Orders</h1>
            <p className="text-gray-600">Manage customer orders and track fulfillment</p>
            </div>
            <button className='w-35 cursor-pointer border box-border p-2 bg-blue-600 rounded-2xl border-gray-300 text-white font-medium'>Export Orders</button>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Total Orders</p>
                    <Inventory2OutlinedIcon sx={{color:'blue'}}/>
                </div>
                <h1 className='text-2xl font-bold'>5</h1>
            </div>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Pending Orders</p>
                    <RemoveRedEyeOutlinedIcon sx={{color:'green'}}/>
                </div>
                <h1 className='text-2xl font-bold'>4</h1>
            </div>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Shipped Orders</p>
                    <StarBorderIcon sx={{color:'gold'}}/>
                </div>
                <h1 className='text-2xl font-bold'>2</h1>
            </div>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Total Revenue</p>
                    <Inventory2OutlinedIcon sx={{color:'red'}}/>
                </div>
                <h1 className='text-2xl font-bold'>$4,596</h1>
            </div>
        </div>
        <div className='w-full h-auto border overflow-auto bg-white rounded-2xl border-gray-300 shadow box-border p-4 flex flex-col gap-3.5'>
            <h1 className='font-medium'>Recent Orders</h1>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 border box-border p-1.5 rounded-xl border-gray-300'>
                    <SearchIcon className='text-gray-400'/>
                    <input className='outline-0' placeholder='Search orders...'/>
                </div>
                <select className='w-37 border box-border p-1.5 border-gray-300 rounded-[8px] text-sm font-medium'>
                    <option value="">All Status</option>
                    <option value="">Pending</option>
                    <option value="">Processing</option>
                    <option value="">Shipped</option>
                    <option value="">Completed</option>
                    <option value="">Canceled</option>
                </select>
            </div>
            <table className="table-auto w-full border-collapse rounded-2xl shadow overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Order Id</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Customer</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Items</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Total</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Payment</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                    </tr>
                </thead>

                <tbody className="text-sm">
                    <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-6 py-4">ORD-001</td>
                    <td className="px-6 py-4">
                        <div>
                        <h1 className="font-medium text-gray-800">John Doe</h1>
                        <p className="text-gray-500 text-xs">john@gmail.com</p>
                        </div>
                    </td>
                    <td className="px-6 py-4">1x iPhone 15 Pro</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        Completed
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                        Paid
                        </span>
                    </td>
                    <td className="px-6 py-4">1/15/2024</td>
                    </tr>
                </tbody>
            </table>

            
        </div>
        </>
    );
}