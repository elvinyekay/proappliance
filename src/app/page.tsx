import HeroHome from '@/sections/HeroHome/HeroHome';
import OurServices from '@/sections/OurServices/OurServices';
import './page.css';
import AboutUs from '@/sections/AboutUs/AboutUs';
import BrandsRepair from '@/sections/BrandsRepair/BrandsRepair';

export default function Home() {
  return (
    <main id={'main'}>
      <HeroHome />
      <div className="service-wrapper">
        <OurServices />
      </div>
      <AboutUs />
      <BrandsRepair />
    </main>
  );
}
