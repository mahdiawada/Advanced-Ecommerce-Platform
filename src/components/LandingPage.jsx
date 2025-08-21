import FeaturedSection from "./FeaturedSection";
import { Footer } from "./Footer";
import HeroSection from "./HeroSection";

import ShopByCategory from "./ShopByCategory";

export function LandingPage() {
    return (
        <>
        <HeroSection />
        <ShopByCategory />
        <FeaturedSection/>
        <Footer/>
        </>
    )
}