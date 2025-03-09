import Image from 'next/image';
import './hero.css';

export default function Hero() {
  return (
    <div>
      <Image
        src="/assets/img/slider/main-slider-bg.jpg" // Şəkil yolunu qeyd et
        alt="Hero Image"
        width={1200}
        height={800}
        className="hero"
      />
      <Image
        src="/assets/img/slider/main-slider-bg.jpg" // Şəkil yolunu qeyd et
        alt="Hero Image"
        width={1200}
        height={800}
        className="hero"
      />
      Hero
    </div>
  );
}
