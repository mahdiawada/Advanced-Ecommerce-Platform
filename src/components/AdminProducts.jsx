import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';


export default function AdminProducts() {
    return (
        <>
        <div className='flex flex-col gap-2 md:flex-row md:justify-between'>
            <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-gray-600">Manage your product inventory and listings</p>
            </div>
            <button className='w-40 cursor-pointer border box-border p-2 bg-blue-600 rounded-2xl border-gray-300 text-white font-medium'>Add a Product</button>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Total Products</p>
                    <Inventory2OutlinedIcon sx={{color:'blue'}}/>
                </div>
                <h1 className='text-2xl font-bold'>5</h1>
            </div>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Active Products</p>
                    <RemoveRedEyeOutlinedIcon sx={{color:'green'}}/>
                </div>
                <h1 className='text-2xl font-bold'>4</h1>
            </div>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Featured Products</p>
                    <StarBorderIcon sx={{color:'gold'}}/>
                </div>
                <h1 className='text-2xl font-bold'>2</h1>
            </div>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Out of Stock</p>
                    <Inventory2OutlinedIcon sx={{color:'red'}}/>
                </div>
                <h1 className='text-2xl font-bold'>1</h1>
            </div>
        </div>
        <div className='w-full h-auto border overflow-auto bg-white rounded-2xl border-gray-300 shadow box-border p-4 flex flex-col gap-3.5'>
            <h1 className='font-medium'>Product List</h1>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 border box-border p-1.5 rounded-xl border-gray-300'>
                    <SearchIcon className='text-gray-400'/>
                    <input className='outline-0' placeholder='Search products...'/>
                </div>
                <select className='w-37 border box-border p-1.5 border-gray-300 rounded-[8px] text-sm font-medium'>
                    <option value="">All Categories</option>
                    <option value="">Phones</option>
                    <option value="">Laptops</option>
                    <option value="">Desktops</option>
                </select>
                <select className='w-37 border box-border p-1.5 border-gray-300 rounded-[8px] text-sm font-medium'>
                    <option value="">All Status</option>
                    <option value="">Active</option>
                    <option value="">Out of Stock</option>
                    <option value="">Draft</option>
                </select>
            </div>
            <table className="table-auto w-full border-collapse rounded-2xl shadow overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Products</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Stock</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Sales</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Featured</th>
                    </tr>
                </thead>

                <tbody className="text-sm">
                    <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-6 py-4">
                        <div>
                        <h1 className="font-medium text-gray-800">iPhone 15 Pro</h1>
                        <p className="text-gray-500 text-xs">iPhone</p>
                        </div>
                    </td>
                    <td className="px-6 py-4">Phones</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4">25</td>
                    <td className="px-6 py-4">120</td>
                    <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                        Yes
                        </span>
                    </td>
                    </tr>

                    <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-6 py-4">
                        <div>
                        <h1 className="font-medium text-gray-800">Samsung Galaxy S24</h1>
                        <p className="text-gray-500 text-xs">Samsung</p>
                        </div>
                    </td>
                    <td className="px-6 py-4">Phones</td>
                    <td className="px-6 py-4">$899</td>
                    <td className="px-6 py-4">12</td>
                    <td className="px-6 py-4">80</td>
                    <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                        Out of Stock
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        No
                        </span>
                    </td>
                    </tr>
                </tbody>
            </table>

            
        </div>
        </>
    )
}