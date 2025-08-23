import StarBorderIcon from '@mui/icons-material/StarBorder';
import CloseIcon from '@mui/icons-material/Close';

export default function AdminFeaturedProducts() {
    return (
        <>
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Featured Products</h1>
            <div className="flex flex-col gap-2">
                <p className="text-gray-500">Manage products displayed prominently on your homepage</p>
                <button className="p-2 w-50 bg-blue-600 rounded-2xl text-white font-medium">Add Featured Product</button>
            </div>
        </div>
        <div className="w-full h-auto border rounded-2xl bg-white border-gray-300 shadow p-4 flex flex-col gap-3.5">
            <h1 className='text-[17px] font-medium flex items-center'><StarBorderIcon className='text-yellow-400 mr-1' />Currently Featured (3) </h1>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                <div className='w-full h-25 border border-yellow-400 rounded-2xl bg-yellow-50 flex items-center gap-3 box-border p-3 justify-between'>
                    <div className='flex gap-1 sm:gap-4'>
                        <div className='w-[40px] h-[40px] rounded-full bg-yellow-400 flex justify-center items-center font-bold text-white'>1</div>
                        <div className='font-[500] text-[15px]'>
                            <h1>Iphone 15 Pro</h1>
                            <p className='text-gray-500 text-[12px]'>Iphone - Phones</p>
                        </div>
                    </div>
                    <div className='flex gap-2 sm:gap-6'>
                        <h1 className='font-bold text-xl'>$999</h1>
                        <CloseIcon className='text-red-600'/>
                    </div>
                </div>
                
            </div> 
        </div>
        </>
    )
}