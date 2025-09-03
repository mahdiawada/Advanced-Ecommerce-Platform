import { useRef } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function FeaturedSection() {
    const scrollContainerRef = useRef(null);
    
    const handleScrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
    const handleScrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
    return (
        <div className="w-full h-auto bg-gray-100 p-10 flex flex-col gap-5 lg:p-20 lg:gap-10">
            <div className="flex justify-between">
                <h1 className="text-3xl font-extrabold">Get Our Featured <span className="text-blue-600">Products!</span></h1>
                <div className="flex gap-3">
                    <button className="hidden md:flex items-center justify-center bg-white text-black rounded-full p-2 hover:bg-gray-800 hover:text-white hover:duration-200" onClick={handleScrollLeft}><ArrowBackIosNewIcon/></button>
                    <button className="hidden md:flex items-center justify-center bg-white text-black rounded-full p-2 hover:bg-gray-800 hover:text-white hover:duration-200" onClick={handleScrollRight}><ArrowForwardIosIcon/></button>
                </div>
            </div>
            <div ref={scrollContainerRef} className="w-full h-[400px] bg-gray-100 rounded-[7px] flex overflow-x-auto space-x-4 scrollbar-hide">
                <div className="relative h-full flex-shrink-0">
                    <img className="h-full object-cover rounded-[7px]" src="/photos/desktop.jpg"></img> 
                    <button className="absolute bottom-5 left-5 bg-white box-border p-3 w-45 rounded-3xl font-bold">Get This Product</button>
                </div>
                <div className="relative h-full flex-shrink-0">
                    <img className="h-full object-cover rounded-[7px]" src="/photos/desktop.jpg"></img> 
                    <button className="absolute bottom-5 left-5 bg-white box-border p-3 w-45 rounded-3xl font-bold">Get This Product</button>
                </div>
                <div className="relative h-full flex-shrink-0">
                    <img className="h-full object-cover rounded-[7px]" src="/photos/desktop.jpg"></img> 
                    <button className="absolute bottom-5 left-5 bg-white box-border p-3 w-45 rounded-3xl font-bold">Get This Product</button>
                </div>
                <div className="relative h-full flex-shrink-0">
                    <img className="h-full object-cover rounded-[7px]" src="/photos/desktop.jpg"></img> 
                    <button className="absolute bottom-5 left-5 bg-white box-border p-3 w-45 rounded-3xl font-bold">Get This Product</button>
                </div>
                <div className="relative h-full flex-shrink-0">
                    <img className="h-full object-cover rounded-[7px]" src="/photos/desktop.jpg"></img> 
                    <button className="absolute bottom-5 left-5 bg-white box-border p-3 w-45 rounded-3xl font-bold">Get This Product</button>
                </div>
                <div className="relative h-full flex-shrink-0">
                    <img className="h-full object-cover rounded-[7px]" src="/photos/desktop.jpg"></img> 
                    <button className="absolute bottom-5 left-5 bg-white box-border p-3 w-45 rounded-3xl font-bold">Get This Product</button>
                </div>
                <div className="relative h-full flex-shrink-0">
                    <img className="h-full object-cover rounded-[7px]" src="/photos/desktop.jpg"></img> 
                    <button className="absolute bottom-5 left-5 bg-white box-border p-3 w-45 rounded-3xl font-bold">Get This Product</button>
                </div>
            </div>
        </div>
    )
}