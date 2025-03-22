import HeroHome from '@/sections/HeroHome/HeroHome';
import OurServices from '@/sections/OurServices/OurServices';
import './page.css';

export default function Home() {
  return (
    <main id={'main'}>
      <HeroHome />
      <div className="service-wrapper">
        <OurServices />
      </div>
    </main>
  );
}
