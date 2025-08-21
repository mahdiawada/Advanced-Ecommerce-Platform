import Button from '@mui/material/Button';


export default function HeroSection() {

     return (
        <div className='w-full h-[auto] flex flex-col gap-7 box-border p-3.5 pt-10 
                         md:p-12 lg:flex-row lg:p-16 xl:p-30 content-around bg-gray-200'>
              <div className='flex flex-col gap-2.5 text-center md:gap-7 lg:gap-10 lg:w-1/2'>
                <h1 className='font-extrabold text-4xl text-center md:text-5xl lg:text-start'>Latest Tech <span className='text-blue-600'>Innovation</span></h1>
                <p className='text-gray-500 lg:text-start lg:text-xl'>Discover cutting-edge phones, powerful laptops, and high-performance desktops. Premium quality at unbeatable prices.</p>
                <div className='flex gap-5 justify-center lg:justify-start'>
                  <Button className='w-30' variant="contained">Shop Now</Button>
                  <Button className='w-30' variant="contained">Login</Button>
                </div>
              </div>
              <div className='pic-div lg:w-1/2'>
                <img className='rounded-2xl mt-5 shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:shadow-[0_35px_35px_rgba(0,0,0,0.4)] hover:duration-150
                                lg:mt-0  ' src="\photos\modern-stationary-collection-arrangement.jpg" />
              </div>
        </div>
    );
} 