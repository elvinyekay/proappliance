import HeroHome from '@/sections/HeroHome/HeroHome';
import OurServices from '@/sections/OurServices/OurServices';
import './page.css';
import AboutUs from '@/sections/AboutUs/AboutUs';
import BrandsRepair from '@/sections/BrandsRepair/BrandsRepair';
import ServiceRequest from '@/sections/ServiceRequest/ServiceRequest';

export default function Home() {
  return (
    <main id={'main'}>
      <HeroHome />
      <div className="service-wrapper">
        <OurServices />
      </div>
      <AboutUs />
      <div className="request-wrapper">
        <ServiceRequest />
      </div>
      <BrandsRepair />
    </main>
  );
}
